# 装饰器应用
# 来源: <<Python 3 学习笔记 雨痕>>


###############################
# 部件注册
# 在很多web框架里，用装饰器替代配置文件实现路由注册
###############################

class App:
    def __init__(self):
        self.routers = {}

    def route(self, url):
        def register(fn):
            self.routers[url] = fn
            return fn
        return register

app = App()

@app.route('/')
def index():
    pass

@app.route('/help')
def help():
    pass


print(app.routers)
# {'/': <function index at 0x1029a12f0>, '/help': <function help at 0x1029a1400>}


###############################
# 实例管理
# 替代目标构造方法，拦截实例的创建。用于实现对象缓存，或单例模式
###############################

def singleton(cls):
    inst = None

    def wrap(*args, **kwargs):
        nonlocal inst
        if not inst: inst = cls(*args, **kwargs)
        return inst

    return wrap


@singleton
class X:
    pass

print(X() is X()) # True


###############################
# 属性管理
# 为目标添加额外属性，在原有设计上以装配方式混入(mixin) 其他功能组
###############################

def pet(cls):
    cls.dosomething = lambda self: print('dosomething!')
    return cls

@pet
class Parrot:
    pass
# 还可用代理类拦截(__getattr__ __setattr__) 对目标进行访问，比如实现只读功能
# TODO

Parrot().dosomething() # dosomething!


###############################
# 调用跟踪
# 记录目标调用参数，返回值， 以及执行次数和执行时间等信息
###############################

def call_count(fn):

    def counter(*args, **kwargs):
        counter.__count__ += 1
        return fn(*args, **kwargs)

    counter.__count__ = 0
    return counter

@call_count
def a(): pass

@call_count
def b(): pass

a(); a(); print(a.__count__)  # 2

b(); b(); b(); print(b.__count__)  # 3

# 标准库中类似应用 通过缓存结果减少目标执行次数
# import functools
# import time
# @functools.lru_cache(10)
# def test(x):
#     time.sleep(x)
#
# %%time  # <---- 这里python shell 和ipython 都会报错?
# for i in range(1000): test(1)

# 上下文管理协议 是对异常处理结构的一种包装

class DB:
    def __init__(self, name):
        self.name = name

    def __enter__(self):
        print(f'__enter__: {self.name}.open')
        return self

    def __exit__(self, typ, val, tb):
        print(f'__exit__: {self.name}.close; exception: {val}')
        return False


def logic():
    with DB('mysql') as db:
        print(f'exec in {db.name}')
        raise Exception('logic error')

# logic()

# __enter__: mysql.open
# exec in mysql
# __exit__: mysql.close; exception: logic error
# Traceback (most recent call last):
#   File "context_management_protocol.py", line 21, in <module>
#     logic()
#   File "context_management_protocol.py", line 19, in logic
#     raise Exception('logic error')
# Exception: logic error


# 多个上下文对象
def logic():
    with DB('mysql') as mq, DB('postgres') as pg:
        print(f'exec in {mq.name}')
        print(f'exec in {pg.name}')
        raise Exception('logic error')

# logic()

# __enter__: mysql.open
# __enter__: postgres.open
# exec in mysql
# exec in postgres
# __exit__: postgres.close; exception: logic error
# __exit__: mysql.close; exception: logic error
# Traceback (most recent call last):
#   File "context_management_protocol.py", line 41, in <module>
#     logic()
#   File "context_management_protocol.py", line 39, in logic
#     raise Exception('logic error')
# Exception: logic error


# 上下文对象需要创建类型，并实现协议方法.
# contextlib   contextmanager

def test(db):
    print(f'open: {db}')
    try:
        print(f'exec: {db}')
    finally:
        print(f'close: {db}')

# test('mysql')

# open: mysql
# exec: mysql
# close: mysql


# 将上下文剥离，以便分离指责并实现重用
import contextlib

@contextlib.contextmanager
def db_context(db):
    try:
        print(f'open: {db}')
        yield db
    finally:
        print(f'close: {db}')

def test(db):
    with db_context(db):
        print(f'exec: {db}')
        raise Exception('error')

# test('mysql')

# open: mysql
# exec: mysql
# close: mysql
# Traceback (most recent call last):
#   File "context_management_protocol.py", line 88, in <module>
#     test('mysql')
#   File "context_management_protocol.py", line 86, in test
#     raise Exception('error')
# Exception: error


# contextmanager
class GeneratorContextManager:

    def __init__(self, func):
        self.gen = func()

    def __enter__(self):
        return next(self.gen)

    def __exit__(self, typ, val, tb):
        if typ is None:
            next(self.gen)
        else:
            self.gen.throw(typ, val, tb)

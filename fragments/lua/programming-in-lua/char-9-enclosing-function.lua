-- 函数是第一类值
a = {p = print}     -- 'a.p' 指向 'print' 函数
a.p("hello world")  -- hello world
print = math.sin    -- 'print' 指向 sine 函数
a.p(print(1))       -- 0.8414709848079
math.sin = a.p      -- 'sin' 指向 print 函数
math.sin(10, 20)    -- 10   20

function foo (x) return 2*x end
foo = function (x) return 2*x end

-- 非全局函数
Lib = {}
Lib.foo = function (x, y) return x + y end
Lib.goo = function (x, y) return x - y end
print(Lib.foo(2, 3), Lib.goo(2, 3))     --> 5   -1

Lib = {
    foo = function (x, y) return x + y end,
    goo = function (x, y) return x - y end
}

Lib = {}
function Lib.foo (x, y) return x + y end
function Lib.goo (x, y) return x - y end
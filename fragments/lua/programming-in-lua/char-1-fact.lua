-- 计算阶乘的函数
function fact (n)
    if n == 0 then
        return 1
    else
        return n * fact(n - 1)
    end
end

-- 让用户输入一个数，然后打印这个数的阶乘
print("enter a number: ")
a = io.read("*n")
print(fact(a))
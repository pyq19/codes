-- 表构造器
days = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}
print(days[4])  --> Wednesday

-- 初始化记录式（record-like）表
a = {x = 10, y = 20}    -- 能提前判断表大小，速度更快
-- 等价于
a = {}; a.x = 10; a.y = 20

-- 在同一个构造器中，可以混用记录式（record-style）和列表式（list-style）写法
polyline = {
    color = "blue",
    thickness = 2,
    npoints = 2,
    {x = 10, y = 0},    -- polyline[1]
    {x = -10, y = 0},   -- polyline[2]
    {x = -10, y = 1},   -- polyline[3]
    {x = 0, y = 1}      -- polyline[4]
}

-- 通过方括号括起来的表达式显式指定每一个索引
opnames = {["x"] = "add", ["-"] = "sub", ["*"] = "mul", ["/"] = "div"}
i = 20; s = "-"
a = {[i+0] = s, [i+1] = s..s, [i+2] = s..s..s}
print(opnames[s])   --> sub
print(a[22])        --> ---

-- 以下表达式等价
{x = 0, y = 1}
{["x"] = 0, ["y"] = 1}

{"r", "g", "b"}
{[1] = "r", [2] = "g", [3] = "b"}

-- 用 pairs 迭代器遍历表中的键值对
t = {10, print, x = 12, k = "hi"}
for k, v in pairs(t) do
    print(k, v)
end
-- 遍历表过程中元素的出现顺序是随机的

-- 对与列表，可以用 ipairs 迭代器
t = {10, print, 12, "hi"}
for k, v in ipairs(t) do
    print(k, v)
end
-- 列表的遍历是按顺序的

-- 也可以使用 for 遍历序列
t = {10, print, 12, "hi"}
for k = 1, #t do
    print(k, t[k])
end
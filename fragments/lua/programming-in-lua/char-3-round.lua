-- 无偏取整函数
function round (x)
    local f = math.floor(x)
    if (x == f) or (x % 2.0 == 0.5) then
        return f
    else
        return math.floor(x + 0.5)
    end
end

print(round(2.5))
print(round(3.5))
print(round(-2.5))
print(round(-1.5))
--[[
2
4
-2
-2
]]
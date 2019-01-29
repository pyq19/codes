--[[
    八皇后问题，目标是把 8 个皇后合理地摆在棋盘上，让每个皇后之间都不能相互攻击
]]

N = 8 -- 棋盘大小

-- 检查 (n, c) 是否不会被攻击
function isplaceok (a, n, c)
    for i = 1, n - 1 do     -- 对于每一个已经被放置的皇后
        if (a[i] == c) or               -- 同一列
            (a[i] - i == c - n) or      -- 同一对角线
            (a[i] + i == c + n) then    -- 同一对角线
            return false    -- 位置会被攻击
        end
    end
    return true     -- 不会被攻击，位置有效
end

-- 打印棋盘
function printsolution (a)
    for i = 1, N do
        for j = 1, N do
            io.write(a[i] == j and "X" or "-", " ")
        end
        io.write("\n")
    end
    io.write("\n")
end

-- 把从 'n' 到 'N' 的所有皇后放在棋盘 'a' 上
function addqueen (a, n)
    if n > N then       -- 是否所有的皇后都被放置好了
        printsolution(a)
    else                -- 尝试着放置第 n 个皇后
        for c = 1, N do
            if isplaceok(a, n, c) then
                a[n] = c    -- 把第 n 个皇后放在列 'c'
                addqueen(a, n + 1)
            end
        end
    end
end

-- 运行程序
addqueen({}, 1)

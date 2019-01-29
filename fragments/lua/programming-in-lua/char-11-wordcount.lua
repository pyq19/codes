-- 统计单词出现频率
local counter = {}

for line in io.lines() do
    for word in string.gmatch(line, "%w+") do
        counter[word] = (counter[word] or 0) + 1
    end
end

local words = {}        -- 文本中所有单词的列表

for w in pairs(counter) do
    words[#words + 1] = w
end

table.sort(words, function (w1, w2) 
    return counter[w1] > counter[w2] or counter[w1] == counter[w2] and w1 < w2
end)

-- 要输出的字数
local n = math.min(tonumber(arg[1]) or math.huge, #words)

for i = 1, n do
    io.write(words[i], "\t", counter[words[i]], "\n")
end

-- lua char-11-wordcount.lua 10 < book.txt
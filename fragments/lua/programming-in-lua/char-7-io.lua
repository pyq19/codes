-- 7.1 对文件进行排序
local lines = {}

-- 将所有行读取到表 'lines' 中
--[[
for line in io.lines() do
    lines[#lines + 1] = line
end
]]

-- 排序
-- table.sort(lines)

lines = {1, 2}

-- 输出所有的行
for _, l in ipairs(lines) do
    io.write(l, "\n")
end


-- 7.2
print(io.open("/etc/passwd", "w"))

-- 打开一个文件并读取其中所有内容
local f = assert(io.open("/etc/passwd", "r"))
local t = f:read("a")
f:close()


-- 7.4.1 运行系统命令
function createDir (dirname)
    os.execute("mkdir " .. dirname)
end

-- 使用当前目录中所有内容构建一个表
local f = io.popen("ls ~", "r")
local dir = {}
for entry in f:lines() do
    dir[#dir + 1] = entry
end

for k, v in pairs(dir) do
    print(k, v)
end
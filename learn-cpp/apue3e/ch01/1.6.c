/*
程序(program)是存储在磁盘某个目录的可执行文件.
内核使用 exec 函数将程序读入内存, 并执行程序.
程序的执行实例被成为进程(process)
UNIX 系统确保每个进程都有一个唯一的数字标识符, 称为进程ID
*/

// 打印进程 ID
#include "apue.h"

int main(int argc, char const * argv[]) {
    printf("hello world from process ID %ld\n", (long)getpid());
    exit(0);
}
/* 
getc 一次读取一个字符 然后函数 putc 将此字符写到标准输出
getc 返回常量 EOF, 在 <stdio.h> 中定义.
标准 I/O 常量 stdin stdout 也在头文件 <stdio.h> 中定义,
它们分别代表标准输入和标准输出.
*/

// 用标准 I/O 将标准输入复制到标准输出
#include "apue.h"

int main(int argc, char const *argv[])
{
    int c;
    while ((c = getc(stdin)) != EOF)
        if (putc(c, stdout) == EOF)
            err_sys("output error");
    if (ferror(stdin))
        err_sys("input error");

    exit(0);
}
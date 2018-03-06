// 将来自标准输入的输入复制到标准输出
#include <stdio.h>

int main()
{
    int ch;

    while ((ch = getchar()) != EOF)
        putchar(ch);

    return 0;
}

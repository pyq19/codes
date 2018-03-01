#include <stdio.h>

int main()
{
    int var = 20;       // 实际变量的声明
    int *ip;            // 指针变量的声明

    ip = &var;          // 在指针变量中存储 var 的地址

    printf("var 变量的地址: %p  \n", &var);

    printf("ip 指针变量中存储的地址:    %p  \n", ip);

    printf("*ip 的值:   %d    \n", *ip);

    return 0;
}

// var 变量的地址: 0x7fff59d258c8
// ip 指针变量中存储的地址:    0x7fff59d258c8
// *ip 的值:   20

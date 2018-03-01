#include <stdio.h>

int main()
{
    int var1;
    int var2[10];

    printf("var1 变量的地址: %p \n", &var1);
    printf("var2 变量的地址: %p \n", &var2);

    return 0;
}

// var1 变量的地址: 0x7fff5bf80898
// var2 变量的地址: 0x7fff5bf808a0

// NULL 指针
// 空指针: 在变量声明的时候，如果没有确切的地址可以赋值，为指针变量赋一个 NULL 值是一个良好的编程习惯。赋为 NULL 值的指针被称为空指针。

#include <stdio.h>

int main()
{
    int *ptr = NULL;

    printf("ptr 的值是: %p \n", ptr);
    printf("%d\n", ptr); // 0

    if(ptr)
        printf(" in if \n");
    else
        printf(" in else \n");

    return 0;

}

// ptr 的值是: 0x0
//  in else

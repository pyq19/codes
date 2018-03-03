#include <stdio.h>

void swap(int *nx, int *ny)
{
    int temp = *nx;
    *nx = *ny;
    *ny = temp;
}

int main()
{
    int na, nb;

    puts("请输入两个整数");
    printf("A: ");  scanf("%d", &na);
    printf("B: ");  scanf("%d", &nb);

    swap(&na, &nb);

    printf("A: %d\n, B: %d\n", na, nb);
    return 0;
}

// 请输入两个整数
// A: 11
// B: 22
// A: 22
// , B: 11

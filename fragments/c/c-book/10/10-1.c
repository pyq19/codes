#include <stdio.h>

void sum_diff(int n1, int n2, int sum, int diff)
{
    sum = n1 + n2;
    diff = (n1 > n2) ? n1 - n2 : n2 - n1;
}

int main()
{
    int na, nb;
    int wa = 0, sa = 0;

    puts("输入两个整数");
    printf("整数A: ");  scanf("%d", &na);
    printf("整数B: ");  scanf("%d", &nb);

    sum_diff(na, nb, wa, sa);

    printf("两数之和: %d, 两数之差%d.\n", wa, sa);

    return 0;
}

// 输入两个整数
// 整数A: 100
// 整数B: 2
// 两数之和: 0, 两数之差0.

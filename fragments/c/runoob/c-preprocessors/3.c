#include <stdio.h>

#define MAX(x, y)   ((x>y)  ?   (x):(y))
#define SWAP1(x, y) {x = x + y;   y = x - y;    x = x - y;}
#define SWAP2(x, y) {x = x ^ y;   y = x ^ y;    x = x ^ y;}

int main()
{
    int a, b;
    printf("输入两个数字\n");
    scanf("%d   %d", &a, &b);
    printf("Max number is: %d\n", MAX(a, b));
    printf("交换前: x = %d, y = %d \n", a, b);
    SWAP1(a, b);
    printf("交换后: x = %d, y = %d \n", a, b);
    SWAP2(a, b);
    printf("再次交换后: x = %d, y = %d \n", a, b);
    return 0;
}

// 输入两个数字
// 5
// 8
// Max number is: 8
// 交换前: x = 5, y = 8
// 交换后: x = 8, y = 5
// 再次交换后: x = 5, y = 8

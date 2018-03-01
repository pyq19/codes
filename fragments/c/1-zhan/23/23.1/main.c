#include <stdio.h>

int *swap(int *px, int *py)
{
    int temp;
    temp = *px;
    *px = *py;
    *py = temp;
    return px;
}

int main()
{
    int i = 10, j = 20;
    printf("before i=%d, j=%d\n", i, j);
    int *p = swap(&i, &j);
    printf("after i=%d, j=%d, *p=%d\n", i, j, *p);
    return 0;
}

// before i=10, j=20
// after i=20, j=10, *p=20

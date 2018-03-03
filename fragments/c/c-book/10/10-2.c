#include <stdio.h>

int main()
{
    int     nx;
    double  dx;
    int     vc[3];

    printf("nx      的地址: %p\n", &nx);
    printf("dx      的地址: %p\n", &dx);
    printf("vc[0]   的地址: %p\n", &vc[0]);
    printf("vc[1]   的地址: %p\n", &vc[1]);
    printf("vc[2]   的地址: %p\n", &vc[2]);

    return 0;
}

// nx      的地址: 0x7fff563118c4
// dx      的地址: 0x7fff563118b8
// vc[0]   的地址: 0x7fff563118cc
// vc[1]   的地址: 0x7fff563118d0
// vc[2]   的地址: 0x7fff563118d4

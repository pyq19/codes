#include <stdio.h>


int main()
{
    int i;
    int vc[5] = {10, 20, 30, 40, 50};
    int *ptr = &vc[0];

    for (i = 0; i < 5; i++)
        printf("vc[%d] = %d     ptr[%d] = %d    *(ptr + %d) = %d\n",
                    i,  vc[i],      i,      ptr[i],     i,  *(ptr + i));
    return 0;
}

/*
vc[0] = 10     ptr[0] = 10    *(ptr + 0) = 10
vc[1] = 20     ptr[1] = 20    *(ptr + 1) = 20
vc[2] = 30     ptr[2] = 30    *(ptr + 2) = 30
vc[3] = 40     ptr[3] = 40    *(ptr + 3) = 40
vc[4] = 50     ptr[4] = 50    *(ptr + 4) = 50
*/

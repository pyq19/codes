// 16.2
#include <stdio.h>
#define SQUARE(X) X*X
#define PR(X)   printf("The result is %d.\n", X)

int main(void)
{
    int x = 5;
    int z;

    printf("x = %d\n", x);
    z = SQUARE(x);
    printf("Evaluating SQUARE(x): ");
    PR(z);
    z = SQUARE(2);
    printf("Evaluating SQUARE(2): ");
    PR(z);
    printf("Evaluating SQUARE(x+2): ");
    PR(SQUARE(x+2));
    return 0;
}

// x = 5
// Evaluating SQUARE(x): The result is 25.
// Evaluating SQUARE(2): The result is 4.
// Evaluating SQUARE(x+2): The result is 17.

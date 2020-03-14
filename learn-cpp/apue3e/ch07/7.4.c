#include "apue.h"

int main(char argc, char const * argv[])
{
    int i;
    for (i = 0; i < argc; i++)  // echo all command-line args
        printf("argv[%d]: %s\n", i, argv[i]);

    printf("argc: %d\n", argc);
    exit(0);
}

// ./a.out a b c

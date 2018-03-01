#include <stdio.h>
#include "stack.h"

int main(void)
{
    push('a');
    return 0;
}

/*
gcc -c stack/stack.c stack/push.c stack/pop.c stack/is_empty.c
ar rs libstack.a stack.o push.o pop.o is_empty.o
gcc main.c -L. -lstack -Istack -o main
*/

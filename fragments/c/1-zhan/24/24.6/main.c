#include <stdio.h>
#include "ret_allocator.h"

int main()
{
    unit_t *p = alloc_unit();

    printf("number: %d\nmsg: %s\n", p->number, p->msg);
    free_unit(p);
    p = NULL;
    return 0;
}

// number: 3
// msg: hello world!

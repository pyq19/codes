#include <stdio.h>
#include "names_st.h"

int main(void)
{
    names candidate;

    get_names(&candidate);
    printf("let's welcome ");
    show_names(&candidate);
    printf(" to this program!\n");
    return 0;
}

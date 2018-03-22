#include <stdio.h>
#include <unistd.h>

int gval = 10;

int main(int argc, char *argv[])
{
    pid_t pid;
    int lval = 20;
    gval++, lval += 5;

    pid = fork();
    if(pid == 0)    // if child process
        gval += 2, lval += 2;
    else    // parent process
        gval -= 2, lval -= 2;

    if(pid == 0)
        printf("child proc: [%d, %d] \n", gval, lval);
    else
        printf("parent proc: [%d, %d] \n", gval, lval);

    return 0;
}

// parent proc: [9, 23]
// child proc: [13, 27]

// 60.2
// gcc -I ../lib id_echo_cl.c inet_sockets.c  ../lib/error_functions.c -o client
// ~/codes/fragments/c/linux-programming/60(master ✗) sudo ./client localhost hello goodbye
// [5 bytes] hello
// [7 bytes] goodbye
#include "id_echo.h"

int
main(int argc, char *argv[])
{
    int sfd, j;
    size_t len;
    ssize_t numRead;
    char buf[BUF_SIZE];

    if (argc < 2 || strcmp(argv[1], "--help") == 0)
        usageErr("%s: host msg...\n", argv[0]);

    // construct server address from first command-line argument

    sfd = inetConnect(argv[1], SERVICE, SOCK_DGRAM);
    if (sfd == -1)
        fatal("could not connect to server socket");

    // send remaining command-line arguments to server as separate datagrams

    for (j = 2; j < argc; j++) {
        len = strlen(argv[j]);
        if (write(sfd, argv[j], len) != len)
            fatal("partial/failed write");

        numRead = read(sfd, buf, BUF_SIZE);
        if (numRead == -1)
            errExit("read");

        printf("[%1d bytes] %.*s\n", (long) numRead, (int) numRead, buf);
    }

    exit(EXIT_SUCCESS);
}

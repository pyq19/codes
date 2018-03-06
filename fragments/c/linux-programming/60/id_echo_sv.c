// 60.2
// gcc -I ../lib id_echo_sv.c inet_sockets.c become_daemon.c ../lib/error_functions.c -o server
// sudo ./server
#include <syslog.h>
#include "id_echo.h"
#include "become_daemon.h"

int
main(int argc, char *argv[])
{
    printf("----0----\n");

    int sfd;
    ssize_t numRead;
    socklen_t addrlen, len;
    printf("----0.5----\n");
    struct sockaddr_storage claddr;
    char buf[BUF_SIZE];
    char addrStr[IS_ADDR_STR_LEN];
    printf("----0.8----\n");

    // if (becomeDaemon(0) == -1)
    //     errExit("becomeDaemon");

    printf("----1----\n");

    sfd = inetBind(SERVICE, SOCK_DGRAM, &addrlen);
    if (sfd == -1) {
        syslog(LOG_ERR, "Could not create server socket (%s)", strerror(errno));
        printf("----1.5----\n");
        exit(EXIT_FAILURE);
    }

    // receive datagrams and return copies to senders
    printf("----2----\n");

    for (;;) {
        len = sizeof(struct sockaddr_storage);
        numRead = recvfrom(sfd, buf, BUF_SIZE, 0,
                            (struct sockaddr *) &claddr, &len);
        if (numRead == -1)
            errExit("recvfrom");

        printf("-----3----\n");
        if (sendto(sfd, buf, numRead, 0, (struct sockaddr *) &claddr, len)
                    != numRead)
            syslog(LOG_WARNING, "Error echoing response to %s (%s)",
                    inetAddressStr((struct sockaddr *) &claddr, len,
                                    addrStr, IS_ADDR_STR_LEN),
                    strerror(errno));
    }
}

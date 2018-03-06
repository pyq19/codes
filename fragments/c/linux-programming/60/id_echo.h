// header file for id_echo_sv.c and id_echo_cl.c
#include "inet_sockets.h"       // declares socket functions
#include "tlpi_hdr.h"

#define SERVICE "echo"          // name of UDP service

#define BUF_SIZE 500            // maximum size of datagrams that can be read by client and server

#include <netinet/in.h>
#include <sys/socket.h>
#include <signal.h>
#include "read_line.h"
#include "tlpi_hdr.h"

#define PORT_NUM "50000"
#define INT_LEN 30          // size of string able to hold largest integer (including terminating '\n'


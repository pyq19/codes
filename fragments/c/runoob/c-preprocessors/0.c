#define MAX_ARRAY_LENGTH 20
// 这条指令告诉cpp 把所有MAX_ARRAY_LENGTH 替换为20，使用#define定义常量来增强可读性

#include <stdio.h>
#include "myheader.h"
// 这些指令告诉cpp 从系统库中获取stdio.h 并添加文本到当前的源文件中
// 下一行告诉cpp 从本地目录中获取myheader.h 并添加到当前源文件中

#undef  FILE_SIZE
#define FILE_SIZE   42
// 这个指令告诉cpp 取消已定义的FILE_SIZE 并定义它为42

#ifndef MESSAGE
    #define MESSAGE "You wish!"
#endif
// 这个指令告诉cpp 只有当MESSAGE 未定义时，才定义MESSAGE

#ifdef DEBUG
    /* Your debugging statements here */
#endif
// 这个指令告诉cpp 如果定义了DEBUG 则执行处理语句。
// 在编译时如果向gcc 编译器传递了-DDEBUG 开关量 这个语句可以在编译期间随时开启或关闭调试

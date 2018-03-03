#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("abc", "r");

    if (fp == NULL)
        printf("\a文件打开失败.\n");
    else {
        // 执行文件读入等操作
        fclose(fp);
    }

    return 0;
}

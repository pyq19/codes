// 显示文件内容
#include <stdio.h>

int main()
{
    int ch;
    FILE *fp;
    char fname[64];

    printf("文件名: "); scanf("%s", fname);

    if ((fp = fopen(fname, "r")) == NULL)
        printf("\a文件打开失败\n");
    else {
        while((ch = fgetc(fp)) != EOF)
            putchar(ch);
        fclose(fp);
    }
    return 0;
}
/*
文件名: 13-1.c
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
*/

// 向文件写出程序运行时的日期和时间
#include <time.h>
#include <stdio.h>

int main()
{
    FILE        *fp;
    time_t      t;              // time_t
    struct tm   *local;

    time(&t);                   // time
    local = localtime(&t);      // localtime

    if ((fp = fopen("dt_dat", "w")) == NULL)
        printf("\a文件打开失败.\n");
    else {
        printf("写出当前日期和时间.\n");
        fprintf(fp, "%d %d %d %d %d %d\n",
            local->tm_year + 1900, local->tm_mon + 1, local->tm_mday,
            local->tm_hour,         local->tm_min,      local->tm_sec);
        fclose(fp);
    }
    return 0;
}
// ~/codes/fragments/c/c-book/13(master ✗) cat dt_dat
// 2018 3 6 14 8 43

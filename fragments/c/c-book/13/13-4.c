// 显示程序上一次运行时的日期和时间
#include <time.h>
#include <stdio.h>

char data_file[] = "datetime.dat";

void get_data(void)
{
    FILE *fp;
    if((fp = fopen(data_file, "r")) == NULL) {
        printf("本程序第一次运行.\n");
    } else {
        int year, month, day, h, m, s;

        fscanf(fp, "%d%d%d%d%d%d", &year, &month, &day, &h, &m, &s);
        printf("上一次运行是在%d年%d月%d日%d时%d分%d秒.\n",
                        year, month, day, h, m, s);
        fclose(fp);
    }
}

void put_data(void)
{
    FILE    *fp;
    time_t  t;
    struct tm   *local;

    time(&t);
    local = localtime(&t);

    if ((fp = fopen(data_file, "w")) == NULL)
        printf("\a文件打开失败\n");
    else {
        fprintf(fp, "%d %d %d %d %d %d\n",
            local->tm_year + 1900, local->tm_mon + 1, local->tm_mday,
            local->tm_hour,     local->tm_min,      local->tm_sec);
        fclose(fp);
    }
}

int main()
{
    get_data();

    put_data();

    return 0;
}

// ~/codes/fragments/c/c-book/13(master ✗) ./a.out
// 本程序第一次运行.
// ~/codes/fragments/c/c-book/13(master ✗) ./a.out
// 上一次运行是在2018年3月6日14时17分26秒.
// ~/codes/fragments/c/c-book/13(master ✗) ./a.out
// 上一次运行是在2018年3月6日14时17分27秒.
// ~/codes/fragments/c/c-book/13(master ✗) ./a.out
// 上一次运行是在2018年3月6日14时17分28秒.

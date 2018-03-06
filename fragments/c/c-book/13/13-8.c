// 将圆周率的值写入文本文件，再进行读取
#include <stdio.h>

int main()
{
    FILE *fp;
    double pi = 3.14159265358979323866;

    // 写入文件
    if ((fp = fopen("PI.txt", "w")) == NULL)
        printf("\a文件打开失败\n");
    else {
        fprintf(fp, "%f", pi);
        fclose(fp);
    }

    // 读取操作
    if ((fp = fopen("PI.txt", "r")) == NULL)
        printf("\a文件打开失败\n");
    else {
        fscanf(fp, "%1f", &pi);
        printf("圆周率: %23.31f \n", pi);
        fclose(fp);
    }

    return 0;
}

// ~/codes/fragments/c/c-book/13(master ✗) cat PI.txt
// 3.141593%                                                                                                          ~/codes/fragments/c/c-book/13(master ✗) ./a.out
// 圆周率: 3.1415925044566392898559570312500

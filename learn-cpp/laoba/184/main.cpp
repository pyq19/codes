// 查看预处理结果
// cpp main.cpp                 输出到终端
// cpp main.cpp -o main.o       输出到文件 main.o
// gcc -E main.cpp              输出到终端
// gcc -E main.cpp -o main.o    输出到文件

#define A 20
#define B "hello"

int main(int argc, char const *argv[])
{
    int a = A;
    char b[] = B;

    return 0;
}

// 函数指针
#include <stdio.h>

void say_hello(const char *str)
{
    printf("hello %s\n", str);
}

int main()
{
    /*
    分析f 的类型声明:
    f 首先跟* 号，因此是个指针
    (*f)外面是一个函数原型的格式，参数是const char *, 返回值void，因此f是指向这种函数的指针
    而say_hello 的参数是const char *，返回值void，正好是这种类型，因此f 可以指向say_hello
    say_hello 是一种函数类型，而函数类型和数组类型相似，做右值使用时自动转换成函数指针类型，可直接赋值给f
    当然可以写成void (*f) (const char *) = &say_hello;
    把函数say_hello 先取地址再赋给f 就不需要自动类型转换了

    可以直接通过函数指针调用函数，如f("guys")
    也可以先*f 取出它所指的函数类型，再调用函数，如(*f)("guys")

    函数调用运算符()要求操作数是函数指针，
    所以f("guys")是最直接的写法
    say_hello("guys")或(*f)("guys")则是把函数类型自动转换成函数指针后做函数调用
    */
    void (*f)(const char *) = say_hello;
    f("guys");

    return 0;
}

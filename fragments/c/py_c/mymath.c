#include "Python.h"

int add(int a, int b)
{
    return a + b;
}

// 包装函数，Python 调用add 时，传入的参数在args
PyObject* wrap_add(PyObject* self, PyObject* args)
{
    int a, b, result;
    // 解析参数
    if (!PyArg_ParseTuple(args, "ii", &a, &b))
        return NULL;
    result = add(a, b);
    // 返回PyObject* 类型的参数
    return Py_BuildValue("i", result);
}

// mymath 模块所包含的函数列表
static PyMethodDef mymathMethods[] = {
    // 每行一个函数，含义依次
    // Python方法名，C方法名，参数值，doc
    {"add", wrap_add, METH_VARARGS, "doc"},
    {NULL, NULL, 0, NULL} // 相当于结束符
};

// 初始化模块的方法，自动调用
// 命名要求: init 后加上模块名
void initmymath()
{
    PyObject *m;
    // 调用Py_InitModule方法依次初始化模块mymath，其中模块所具有的函数列表由第二个参数提供
    m = Py_InitModule("mymath", mymathMethods);
}


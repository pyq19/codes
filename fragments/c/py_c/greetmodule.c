#include <Python.h>

static PyObject *
greet_name(PyObject *self, PyObject *args)
{
    const char *name;

    if (!PyArg_ParseTuple(args, "s", &name))
    {
        return NULL;
    }

    printf("Hello %s!\n", name);

    Py_RETURN_NONE;
}

static PyMethodDef GreetMethods[] = {
    {"greet", greet_name, METH_VARARGS, "Greet an entity"},
    {NULL, NULL, 0, NULL}
};

PyMODINIT_FUNC
initgreet(void)
{
    (void) Py_InitModule("greet", GreetMethods);
}

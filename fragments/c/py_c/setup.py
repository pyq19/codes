from distutils.core import setup, Extension

module1 = Extension('mymath', sources=['mymath.c'])

setup(name='mymath', version='1.0', desription='desc', ext_modules=[module1])

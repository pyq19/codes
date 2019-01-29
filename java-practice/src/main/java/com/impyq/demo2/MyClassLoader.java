package com.impyq.demo2;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.IOException;

public class MyClassLoader extends ClassLoader {

    private String byteCode_Path;

    public MyClassLoader(String byteCode_Path) {
        this.byteCode_Path = byteCode_Path;
    }

    @Override
    protected Class<?> findClass(String className) throws ClassNotFoundException {
        byte value[] = null;
        BufferedInputStream in = null;
        try {
            in = new BufferedInputStream(new FileInputStream(byteCode_Path + className + ".class"));
            value = new byte[in.available()];
            in.read(value);
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            if (null != in) {
                try {
                    in.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return defineClass(value, 0, value.length);
    }

    public static void main(String[] args) throws ClassNotFoundException {
        MyClassLoader classLoader = new MyClassLoader("C:\\Users\\yinzhuo\\Desktop\\project-dir\\mavenspring\\src\\main\\java\\com\\impyq\\demo2\\");
        System.out.println(classLoader.findClass("TestClass").getClassLoader().getClass().getName());
        // com.impyq.demo2.MyClassLoader
        System.out.println(classLoader.getParent().getClass().getName());
        // sun.misc.Launcher$AppClassLoader
    }

}

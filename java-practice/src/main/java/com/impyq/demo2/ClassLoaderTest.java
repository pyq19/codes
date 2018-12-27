package com.impyq.demo2;

public class ClassLoaderTest {
    public static void main(String[] args) {
        System.out.println(ClassLoaderTest.class.getClassLoader().getClass().getName());
        // JDK 10: jdk.internal.loader.ClassLoaders$AppClassLoader
        // JDK 8: sun.misc.Launcher$AppClassLoader
    }
}

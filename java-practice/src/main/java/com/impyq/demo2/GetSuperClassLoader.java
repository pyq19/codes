package com.impyq.demo2;

public class GetSuperClassLoader {
    public static void main(String[] args) {
        ClassLoader classLoader = GetSuperClassLoader.class.getClassLoader();
        System.out.println(classLoader.getClass().getName());
        // JDK 10: jdk.internal.loader.ClassLoaders$AppClassLoader
        // JDK 8: sun.misc.Launcher$AppClassLoader

        classLoader = classLoader.getParent();
        System.out.println(classLoader.getClass().getName());
        // JDK 10: jdk.internal.loader.ClassLoaders$PlatformClassLoader
        // JDK 8: sun.misc.Launcher$ExtClassLoader
    }
}

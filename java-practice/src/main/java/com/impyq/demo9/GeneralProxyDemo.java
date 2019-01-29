package com.impyq.demo9;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

// <<Java编程的逻辑>> P877
public class GeneralProxyDemo {
    interface IServiceA {
        void sayHello();
    }
    static class ServiceAImpl implements IServiceA {
        public void sayHello() {
            System.out.println("hello");
        }
    }
    interface IServiceB {
        void fly();
    }
    static class ServiceBImpl implements IServiceB {
        public void fly() {
            System.out.println("flying");
        }
    }
    static class SimpleInvocationHandler implements InvocationHandler {
        private Object readObj;
        public SimpleInvocationHandler(Object readObj) {
            this.readObj = readObj;
        }
        public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
            System.out.println("entering" + readObj.getClass().getSimpleName() + " - " + method.getName());
            Object result = method.invoke(readObj, args);
            System.out.println("leaving" + readObj.getClass().getSimpleName() + " - " + method.getName());
            return result;
        }
    }

    static <T> T getProxy(Class<T> intf, T readObj) {
        return (T) Proxy.newProxyInstance(intf.getClassLoader(), new Class<?>[]{intf}, new SimpleInvocationHandler(readObj));
    }

    public static void main(String[] args) {
        IServiceA a = new ServiceAImpl();
        IServiceA aProxy = getProxy(IServiceA.class, a);
        aProxy.sayHello();

        IServiceB b = new ServiceBImpl();
        IServiceB bProxy = getProxy(IServiceB.class, b);
        bProxy.fly();
    }
}

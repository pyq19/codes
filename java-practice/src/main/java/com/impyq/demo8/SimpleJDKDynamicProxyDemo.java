package com.impyq.demo8;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

// <<Java编程的逻辑>> P872
public class SimpleJDKDynamicProxyDemo {
    interface IService {
        void sayHello();
    }
    static class RealService implements IService {
        public void sayHello() {
            System.out.println("hello");
        }
    }
    static class SimpleInvocationHandler implements InvocationHandler {
        private Object realObj;
        public SimpleInvocationHandler(Object realObj) {
            this.realObj = realObj;
        }
        public Object invoke(Object proxy, Method method,
                             Object[] args) throws Throwable {
            System.out.println("entering " + method.getName());
            Object result = method.invoke(realObj, args);
            System.out.println("leaving " + method.getName());
            return result;
        }
    }
    /*
        1）loader表示类加载器，例子使用和IService一样的类加载器。
        2）interfaces表示代理类要实现的接口列表，是一个数组，元素的类型只能是接口，不能是普通的类，例子中只有一个IService。
        3）h的类型为InvocationHandler，它是一个接口，也定义在java.lang.reflect包中，它只定义了一个方法invoke，对代理接口所有方法的调用都会转给该方法
     */
    public static void main(String[] args) {
        IService realService = new RealService();
        IService  proxyService= (IService) Proxy.newProxyInstance(
                IService.class.getClassLoader(), new Class<?>[] { IService.class },
                new SimpleInvocationHandler(realService));
        proxyService.sayHello();
    }
}

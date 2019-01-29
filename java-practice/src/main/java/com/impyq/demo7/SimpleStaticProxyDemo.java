package com.impyq.demo7;

// 静态代理示例   <<Java编程的逻辑>> P869
public class SimpleStaticProxyDemo {
    interface IService {
        void sayHello();
    }
    static class RealService implements IService {
        public void sayHello() {
            System.out.println("hello");
        }
    }
    static class TraceProxy implements IService {
        private IService realService;
        public TraceProxy(IService realService) {
            this.realService = realService;
        }
        public void sayHello() {
            System.out.println("entering sayHello");
            this.realService.sayHello();
            System.out.println("leaving sayHello");
        }
    }
    public static void main(String[] args) {
        IService realService = new RealService();
        IService proxyService = new TraceProxy(realService);
        proxyService.sayHello();
    }
}

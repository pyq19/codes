package com.impyq.demo4;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("demo4-beans.xml");
        Car car = (Car) context.getBean("car");
        System.out.println(car.toString());

        Car car2 = (Car) context.getBean("car2");
        System.out.println(car2.toString());
    }
}

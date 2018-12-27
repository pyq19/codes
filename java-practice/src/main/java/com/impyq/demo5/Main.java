package com.impyq.demo5;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("demo5/beans.xml");
        BasicDataSource basicDataSource = (BasicDataSource) context.getBean("dataSource");
        System.out.println(basicDataSource.getDriverClassName());
        System.out.println(basicDataSource.getUsername());
        System.out.println(basicDataSource.getPassword());
    }
}

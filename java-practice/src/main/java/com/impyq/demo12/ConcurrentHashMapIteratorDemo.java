package com.impyq.demo12;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

// <<Java编程的逻辑>> ch17
public class ConcurrentHashMapIteratorDemo {
    public static void main(String[] args) {
        test();
    }

    private static void test() {
        final ConcurrentHashMap<String, String> map = new ConcurrentHashMap<String, String>();
        map.put("a", "abstract");
        map.put("b", "basic");
        Thread t1 = new Thread(new Runnable() {
            public void run() {
                for (Map.Entry<String, String> entry : map.entrySet()) {
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    System.out.println(entry.getKey() + "," +entry.getValue());
                }
            }
        });
        t1.start();
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        map.put("c", "call");
    }
}

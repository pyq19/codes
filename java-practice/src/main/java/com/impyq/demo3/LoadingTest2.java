package com.impyq.demo3;

public class LoadingTest2 {
    public static int value1;
    public static int value2 = 0;
    public static LoadingTest2 obj = new LoadingTest2();

    public LoadingTest2() {
        value1 = 10;
        value2 = value1;
        System.out.println("before value1 -> " + value1);
        System.out.println("before value2 -> " + value2);
    }

    public static void main(String[] args) {
        System.out.println("after value1 -> " + value1);
        System.out.println("after value2 -> " + value2);
    }
//    before value1 -> 10
//    before value2 -> 10
//    after value1 -> 10
//    after value2 -> 10
}

package com.impyq.demo14;

import java.util.concurrent.CountDownLatch;

// <<Java编程的逻辑>> P801
// 使用 CountDownLatch 实现同时开始场景
public class RacerWithCountDownLatch {
    static class Racer extends Thread {
        CountDownLatch latch;
        public Racer(CountDownLatch latch) {
            this.latch = latch;
        }

        @Override
        public void run() {
            try {
                this.latch.await();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(getName() + "start run" + System.currentTimeMillis());
        }
    }

    public static void main(String[] args) throws InterruptedException {
        int num = 10;
        CountDownLatch latch = new CountDownLatch(1);
        Thread[] racers = new Thread[num];
        for (int i = 0; i < num; i++) {
            racers[i] = new Racer(latch);
            racers[i].start();
        }
        Thread.sleep(1000);
        latch.countDown();
        System.out.println("==========");
    }
}
/*
await 检查计数是否为0，如果大于0，就等待，await可以被中断，也可以设置最长等待时间。
countDown 检查计数，如果已经为0，直接返回，否则减少计数，如果新的计数变为0，则唤醒所有等待的线程
 */

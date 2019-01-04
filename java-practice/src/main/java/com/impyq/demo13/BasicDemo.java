package com.impyq.demo13;

import java.util.Random;
import java.util.concurrent.*;

// 任务执行服务的基本示例 <<Java编程的逻辑>> ch18 p765
public class BasicDemo {
    static class Task implements Callable<Integer> {
        public Integer call() throws Exception {
            int sleepSeconds = new Random().nextInt(5) + 5;
            Thread.sleep(sleepSeconds * 1000);
            System.out.println(Thread.currentThread().getName() + ":" + sleepSeconds);
            return sleepSeconds;
        }
    }

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService executor = Executors.newSingleThreadExecutor();
        Future<Integer> future = executor.submit(new Task());

        // 模拟执行其他任务
        Thread.sleep(200);

        System.out.println(future.get());
        System.out.println(future.isDone());

        System.out.println("~~~~");

        executor.shutdown();
    }
}

//pool-1-thread-1:7
//7
//true
//~~~~

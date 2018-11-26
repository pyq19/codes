package com.impyq.rabbitmqapi.quickstart;

import com.rabbitmq.client.*;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

// 消费者
public class Consumer {

    public static void main(String[] args) throws IOException, TimeoutException, InterruptedException {
        Config conf = Config.getInstance();

        // 1. 创建一个 ConnectionFactory
        ConnectionFactory connectionFactory = new ConnectionFactory();
        connectionFactory.setHost(conf.get("rabbitmq.host"));
        connectionFactory.setPort(Integer.parseInt(conf.get("rabbitmq.port")));
        connectionFactory.setUsername(conf.get("rabbitmq.username"));
        connectionFactory.setPassword(conf.get("rabbitmq.password"));
        connectionFactory.setVirtualHost("/");

        // 2. 通过连接工厂创建连接
        Connection connection = connectionFactory.newConnection();

        // 3. 通 connection 创建 channel
        Channel channel = connection.createChannel();

        // 4. 声明（创建）一个队列 （1。队列名 2。是否持久化
        String queueName = "test001";
        channel.queueDeclare(queueName, true, false, false, null);

        // 5. 创建消费者
        QueueingConsumer queueingConsumer = new QueueingConsumer(channel);

        // 6. 设置 channel
        channel.basicConsume(queueName, true, queueingConsumer);

        // 7. 获取消息
        while (true) {
            QueueingConsumer.Delivery delivery = queueingConsumer.nextDelivery();
            String msg = new String(delivery.getBody());
            System.out.println("消费端：" + msg);
//            Envelope envelope = delivery.getEnvelope();
        }
    }
}

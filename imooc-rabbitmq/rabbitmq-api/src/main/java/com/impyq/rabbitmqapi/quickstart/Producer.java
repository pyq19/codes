package com.impyq.rabbitmqapi.quickstart;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

// 生产者
public class Producer {
    public static void main(String[] args) throws IOException, TimeoutException {
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

        // 4. 通过 channel 发送数据
        for (int i = 0; i < 5; i++) {
            String msg = "hello rabbit mq";
            // 参数：1. exchange 2. routingKey
            // 没有指定 exchange 但是指定了 routingKey 和消费者的队列名一致的话
            // 会使用 rabbitmq 默认的 AMQP default Exchange，这个 exchange 就能实现此规则
            channel.basicPublish("", "test001", null, msg.getBytes());
        }

        // 5. 关闭相关连接
        channel.close();
        connection.close();
    }
}

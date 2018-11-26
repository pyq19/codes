package com.impyq.rabbitmqapi.api.exchange.direct;

import com.impyq.rabbitmqapi.quickstart.Config;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.QueueingConsumer;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class ConsumerForDirectExchange {
    public static void main(String[] args) throws IOException, TimeoutException, InterruptedException {
        Config conf = Config.getInstance();

        // 1. 创建一个 ConnectionFactory
        ConnectionFactory connectionFactory = new ConnectionFactory();
        connectionFactory.setHost(conf.get("rabbitmq.host"));
        connectionFactory.setPort(Integer.parseInt(conf.get("rabbitmq.port")));
        connectionFactory.setUsername(conf.get("rabbitmq.username"));
        connectionFactory.setPassword(conf.get("rabbitmq.password"));
        connectionFactory.setVirtualHost("/");
        connectionFactory.setAutomaticRecoveryEnabled(true); //是否重连
        connectionFactory.setNetworkRecoveryInterval(3000);

        // 2. 通过连接工厂创建连接
        Connection connection = connectionFactory.newConnection();

        // 3. 通 connection 创建 channel
        Channel channel = connection.createChannel();

        // 4. 声明
        String exchangeName = "test_direct_exchange";
        String exchangeType = "direct";
        String queueName = "test_direct_queue";
        String routingKey = "test.direct";
        // 声明了一个交换机
        channel.exchangeDeclare(exchangeName, exchangeType, true, false, false, null);
        // 声明了一个队列
        channel.queueDeclare(queueName, false, false, false, null);
        // 建立绑定关系
        channel.queueBind(queueName, exchangeName, routingKey);

        QueueingConsumer consumer = new QueueingConsumer(channel);
        channel.basicConsume(queueName, true, consumer);

        // 获取消息
        while (true) {
            QueueingConsumer.Delivery delivery = consumer.nextDelivery();
            String msg = new String(delivery.getBody());
            System.out.println("消费端：" + msg);
        }
    }
}

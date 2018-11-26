package com.impyq.rabbitmqapi.api.exchange.direct;

import com.impyq.rabbitmqapi.quickstart.Config;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class ProducerForDirectExchange {
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

        // 4. 声明
        String exchangeName = "test_direct_exchange";
        String routingKey = "test.direct";

        // 5. 发送
        String msg = "hell world rabbit mq for direct exchange message";
        channel.basicPublish(exchangeName, routingKey, null, msg.getBytes());

        // 关闭
        channel.close();
        connection.close();
    }
}

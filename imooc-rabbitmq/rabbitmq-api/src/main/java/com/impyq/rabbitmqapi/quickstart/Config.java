package com.impyq.rabbitmqapi.quickstart;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class Config {

    private Properties properties;
    private volatile static Config instance;

    private Config() {
        properties = new Properties();
        try {
            InputStream in = new FileInputStream(System.getProperty("user.dir") + "/app.properties");
            properties.load(in);
            in.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static Config getInstance() {
        if (instance == null) {
            synchronized (Config.class) {
                if (instance == null) {
                    instance = new Config();
                }
            }
        }
        return instance;
    }

    public String get(String key) {
        return instance.properties.getProperty(key);
    }

    public String get(String key, String defaultValue) {
        return instance.properties.getProperty(key, defaultValue);
    }

    public static void main(String[] args) throws IOException {
        String s = Config.getInstance().get("db.username");
        System.out.println(s);
    }
}

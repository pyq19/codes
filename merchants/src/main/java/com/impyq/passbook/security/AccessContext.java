package com.impyq.passbook.security;

// 用 threadLocal 单独存储每个线程携带的 token 信息
public class AccessContext {
    public static final ThreadLocal<String> token = new ThreadLocal<>();

    public static String getToken() {
        return token.get();
    }

    public static void setToken(String tokenStr) {
        token.set(tokenStr);
    }

    // 每个线程执行完后执行
    public static void clearAccessKey() {
        token.remove();
    }
}

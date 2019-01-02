package com.impyq.demo6;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;

// <<Java 编程的逻辑>> P842
// 将 object 序列化/反序列化成 string
public class SimpleMapper {
    public static void main(String[] args) {
        Student zhangsan = new Student("张三", 18, 89d);
        String str = SimpleMapper.toString(zhangsan);
        Student zhangsan2 = (Student) SimpleMapper.fromString(str);
        System.out.println(zhangsan2);
    }

    private static String toString(Object obj) {
        Class<?> cls = obj.getClass();
        StringBuilder sb = new StringBuilder();
        sb.append(cls.getName() + "\n");
        for (Field f : cls.getDeclaredFields()) {
            if (!f.isAccessible()) {
                f.setAccessible(true);
            }
            try {
                sb.append(f.getName() + "=" + f.get(obj).toString() + "\n");
            } catch (IllegalAccessException e) {
                throw new RuntimeException(e);
            }
        }
        return sb.toString();
    }

    private static Object fromString(String str) {
        try {
            String[] lines = str.split("\n");
            if (lines.length < 1) {
                throw new IllegalArgumentException(str);
            }
            Class<?> cls = Class.forName(lines[0]);
            Object obj = cls.newInstance();
            if (lines.length > 1) {
                for (int i = 1; i < lines.length; i++) {
                    String[] fv = lines[i].split("=");
                    if (fv.length != 2) {
                        throw new IllegalArgumentException(lines[i]);
                    }
                    Field f = cls.getDeclaredField(fv[0]);
                    if (!f.isAccessible()) {
                        f.setAccessible(true);
                    }
                    setFieldValue(f, obj, fv[1]);
                }
            }
            return obj;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private static void setFieldValue(Field f, Object obj, String value) throws Exception {
            Class<?> type = f.getType();
            if(type == int.class) {
                f.setInt(obj, Integer.parseInt(value));
            } else if(type == byte.class) {
                f.setByte(obj, Byte.parseByte(value));
            } else if(type == short.class) {
                f.setShort(obj, Short.parseShort(value));
            } else if(type == long.class) {
                f.setLong(obj, Long.parseLong(value));
            } else if(type == float.class) {
                f.setFloat(obj, Float.parseFloat(value));
            } else if(type == double.class) {
                f.setDouble(obj, Double.parseDouble(value));
            } else if(type == char.class) {
                f.setChar(obj, value.charAt(0));
            } else if(type == boolean.class) {
                f.setBoolean(obj, Boolean.parseBoolean(value));
            } else if(type == String.class) {
                f.set(obj, value);
            } else {
                Constructor<?> ctor = type.getConstructor(new Class[] { String.class });
                f.set(obj, ctor.newInstance(value));
            }
    }
}

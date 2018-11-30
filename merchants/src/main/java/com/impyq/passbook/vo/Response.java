package com.impyq.passbook.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Response {
    // 错误码, 正确返回 0
    private Integer errorCode = 0;

    // 错误信息, 正确返回空字符串
    private String errorMsg = "";

    // 返回值对象
    private Object data;

    // 正确的响应构造函数
    public Response(Object data) {
        this.data = data;
    }
}

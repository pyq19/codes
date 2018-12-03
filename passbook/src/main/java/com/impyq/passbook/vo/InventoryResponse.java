package com.impyq.passbook.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
// 库存请求响应
public class InventoryResponse {
    // 用户 id
    private Long userId;

    // 优惠券模板信息
    private List<PassTemplateInfo> passTemplateInfos;
}

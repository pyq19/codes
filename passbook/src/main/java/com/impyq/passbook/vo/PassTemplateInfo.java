package com.impyq.passbook.vo;

import com.impyq.passbook.entity.Merchants;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
// 优惠券模版信息
public class PassTemplateInfo extends PassTemplate {
    // 优惠券模版
    private PassTemplate passTemplate;
    // 优惠券对应的商户
    private Merchants merchants;
}

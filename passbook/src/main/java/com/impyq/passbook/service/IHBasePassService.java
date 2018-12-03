package com.impyq.passbook.service;

import com.impyq.passbook.vo.PassTemplate;

// Pass HBase 服务
public interface IHBasePassService {
    // 将 PassTemplate 写入 HBase
    boolean dropPassTemplateToHBase(PassTemplate passTemplate);
}

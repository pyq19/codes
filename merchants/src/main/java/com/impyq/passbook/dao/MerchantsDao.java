package com.impyq.passbook.dao;

import com.impyq.passbook.entity.Merchants;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MerchantsDao extends JpaRepository<Merchants, Integer> {// 对哪张表对接，该表主键类型

    // JPA 实现的方法
    // 通过 id(主键) 查找商户对象
    Merchants findById(Integer id);

    // 根据商户名称获取商户对象
    Merchants findByName(String name);
}

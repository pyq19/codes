package com.impyq.passbook.dao;

import com.impyq.passbook.entity.Merchants;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// Merchants Dao 接口
public interface MerchantsDao extends JpaRepository<Merchants, Integer> {

    // 通过 id 获取商户对象
    Merchants findById(Integer id);

    // 根据商户名称获取商户对象
    Merchants findByName(String name);

    // 根据商户 ids 获取商户对象
    List<Merchants> findByIdIn(List<Integer> ids);
}


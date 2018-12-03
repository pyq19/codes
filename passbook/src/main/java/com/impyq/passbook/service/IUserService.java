package com.impyq.passbook.service;

import com.impyq.passbook.vo.Response;
import com.impyq.passbook.vo.User;

// 用户服务: 创建 User 服务
public interface IUserService {
    // 创建用户
    Response createUser(User user) throws Exception;
}

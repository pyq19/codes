package com.impyq.passbook.service;

import com.impyq.passbook.vo.Feedback;
import com.impyq.passbook.vo.Response;

// 评论功能: 即用户评论相关功能实现
public interface IFeedbackService {

    // 创建评论
    Response createFeedback(Feedback feedback);

    // 获取用户评论
    Response getFeedback(Long userId);
}


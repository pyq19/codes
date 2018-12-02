package com.impyq.passbook.vo;

import com.google.common.base.Enums;
import com.impyq.passbook.constant.FeedbackType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// 用户评论
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Feedback {

    // 用户 id
    private Long userId;

    // 评论类型
    private String type;

    // PassTemplate RowKey, 如果是 app 类型的评论, 则没有
    private String templateId;

    // 评论内容
    private String comment;

    public boolean validate() {
        FeedbackType feedbackType = Enums.getIfPresent(
                FeedbackType.class, this.type.toUpperCase()
        ).orNull();
        return !(null == feedbackType || null == comment);
    }
}


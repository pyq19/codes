package com.impyq.passbook.service.impl;

import com.alibaba.fastjson.JSON;
import com.impyq.passbook.constant.Constants;
import com.impyq.passbook.constant.ErrorCode;
import com.impyq.passbook.dao.MerchantsDao;
import com.impyq.passbook.entity.Merchants;
import com.impyq.passbook.service.IMerchantsServ;
import com.impyq.passbook.vo.CreateMerchantsRequest;
import com.impyq.passbook.vo.CreateMerchantsResponse;
import com.impyq.passbook.vo.PassTemplate;
import com.impyq.passbook.vo.Response;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// 商户服务接口实现
@Slf4j
@Service
public class MerchantsServImpl implements IMerchantsServ {

    // Merchants 数据库接口
    private final MerchantsDao merchantsDao;

    // kafka 客户端
    private final KafkaTemplate<String, String> kafkaTemplate;

    @Autowired
    public MerchantsServImpl(MerchantsDao merchantsDao, KafkaTemplate<String, String> kafkaTemplate) {
        this.merchantsDao = merchantsDao;
        this.kafkaTemplate = kafkaTemplate;
    }

    @Override
    @Transactional
    public Response createMerchants(CreateMerchantsRequest request) {
        Response response = new Response();
        CreateMerchantsResponse merchantsResponse = new CreateMerchantsResponse();
        ErrorCode errorCode = request.validate(merchantsDao);
        if (errorCode != ErrorCode.SUCCESS) {
            merchantsResponse.setId(-1);
            response.setErrorCode(errorCode.getCode());
            response.setErrorMsg(errorCode.getDesc());
        } else {
            merchantsResponse.setId(merchantsDao.save(request.toMerchants()).getId());
        }
        response.setData(merchantsResponse);
        return response;
    }

    @Override
    public Response buildMerchantsInfoById(Integer id) {
        Response response = new Response();
        Merchants merchants = merchantsDao.findById(id);
        if (null == merchants) {
            response.setErrorCode(ErrorCode.MERCHANTS_NOT_EXIST.getCode());
            response.setErrorMsg(ErrorCode.MERCHANTS_NOT_EXIST.getDesc());
        }
        response.setData(merchants);
        return response;
    }

    @Override
    public Response dropPassTemplate(PassTemplate template) {
        Response response = new Response();
        // 首先验证商户是可以进行投放优惠券操作的
        ErrorCode errorCode = template.validate(merchantsDao);
        if (errorCode != ErrorCode.SUCCESS) {
            response.setErrorCode(errorCode.getCode());
            response.setErrorMsg(errorCode.getDesc());
        } else {
            String passTemplate = JSON.toJSONString(template);
            kafkaTemplate.send(
                    Constants.TEMPLATE_TOPIC,   // 消息要发送到的 topic
                    Constants.TEMPLATE_TOPIC,   // 每条消息对应的 key
                    passTemplate
            );
            log.info("DropPassTemplates: {}", passTemplate);
        }
        return response;
    }
}

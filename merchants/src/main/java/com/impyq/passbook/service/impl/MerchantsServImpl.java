package com.impyq.passbook.service.impl;

import com.impyq.passbook.constant.ErrorCode;
import com.impyq.passbook.dao.MerchantsDao;
import com.impyq.passbook.service.IMerchantsServ;
import com.impyq.passbook.vo.CreateMerchantsRequest;
import com.impyq.passbook.vo.CreateMerchantsResponse;
import com.impyq.passbook.vo.PassTemplate;
import com.impyq.passbook.vo.Response;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// 商户服务接口实现
@Slf4j
@Service
public class MerchantsServImpl implements IMerchantsServ {

    // Merchants 数据库接口
    private final MerchantsDao merchantsDao;

    @Autowired
    public MerchantsServImpl(MerchantsDao merchantsDao) {
        this.merchantsDao = merchantsDao;
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
        return null;
    }

    @Override
    public Response dropPassTemplate(PassTemplate template) {
        return null;
    }
}

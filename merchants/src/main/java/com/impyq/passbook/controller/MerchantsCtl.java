package com.impyq.passbook.controller;

import com.alibaba.fastjson.JSON;
import com.impyq.passbook.service.IMerchantsServ;
import com.impyq.passbook.vo.CreateMerchantsRequest;
import com.impyq.passbook.vo.PassTemplate;
import com.impyq.passbook.vo.Response;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

// 商户服务 controller
@Slf4j
@RestController
@RequestMapping("/merchants")
public class MerchantsCtl {

    // 商务服务接口
    private final IMerchantsServ merchantsServ;

    // 用构造函数方式注入
    @Autowired
    public MerchantsCtl(IMerchantsServ merchantsServ) {
        this.merchantsServ = merchantsServ;
    }

    @ResponseBody
    @PostMapping("/create")
    public Response createMerchants(@RequestBody CreateMerchantsRequest request) {
        log.info("CreateMerchants: {}", JSON.toJSONString(request));
        return merchantsServ.createMerchants(request);
    }

    @ResponseBody
    @GetMapping("/{id}")
    public Response buildMerchantsInfo(@PathVariable Integer id) {
        log.info("BuildMerchantsInfo: {}", id);
        return merchantsServ.buildMerchantsInfoById(id);
    }

    @ResponseBody
    @PostMapping("/drop")
    public Response dropPassTemplate(@RequestBody PassTemplate passTemplate) {
        log.info("DropPassTemplate: {}", passTemplate);
        return merchantsServ.dropPassTemplate(passTemplate);
    }

}

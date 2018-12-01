package com.impyq.passbook.service;

import com.alibaba.fastjson.JSON;
import com.impyq.passbook.vo.CreateMerchantsRequest;
import com.impyq.passbook.vo.PassTemplate;
import org.apache.commons.lang.time.DateUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

// 商户服务测试类
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class MerchantsServTest {

    @Autowired
    private IMerchantsServ merchantsServ;

    // {"data":{"id":19},"errorCode":0,"errorMsg":""}
    @Test
//    @Transactional // 加上此注解后，跑完测试会自动回滚（即把插入的测试数据删除）
    public void testCreateMerchantServ() {
        CreateMerchantsRequest request = new CreateMerchantsRequest();
        request.setName("慕课");
        request.setLogoUrl("www.imooc.com");
        request.setBusinessLicenseUrl("www.imooc.com");
        request.setPhone("1234567890");
        request.setAddress("北京市");
        System.out.println(JSON.toJSONString(merchantsServ.createMerchants(request)));
    }

    // {"data":{"address":"北京市","businessLicenseUrl":"www.imooc.com","id":22,"isAudit":false,"logoUrl":"www.imooc.com","name":"慕课","phone":"1234567890"},"errorCode":0,"errorMsg":""}
    @Test
    public void testBuildMerchantsInfoById() {
        System.out.println(JSON.toJSONString(merchantsServ.buildMerchantsInfoById(22)));
    }

    // 测试商户发送优惠券信息（merchantsServ 发送给 kafka 生产端
    // {"errorCode":0,"errorMsg":""}
    // kafka 消费端接收到的消息：{"background":2,"desc":"详情: 慕课","end":1544491838992,"hasToken":false,"id":22,"limit":10000,"start":1542763838990,"summary":"简介: 慕课","title":"慕课-1"}
    @Test
    public void testDropPassTemplate() {
        PassTemplate passTemplate = new PassTemplate();
        passTemplate.setId(22);
        passTemplate.setTitle("慕课-1");
        passTemplate.setSummary("简介: 慕课");
        passTemplate.setDesc("详情: 慕课");
        passTemplate.setLimit(10000L);
        passTemplate.setHasToken(false);
        passTemplate.setBackground(2);
        passTemplate.setStart(DateUtils.addDays(new Date(), -10));
        passTemplate.setEnd(DateUtils.addDays(new Date(), 10));
        System.out.println(JSON.toJSONString(
                merchantsServ.dropPassTemplate(passTemplate)
        ));
    }

}

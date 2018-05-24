package com.filesytem.controller;

import com.filesytem.utils.MathUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Created by wangluming on 2018/5/23.
 */
@Controller
public class FileController {
    public static final String NAME = "admin";
    public static final String PASSOWRD = "27b6489d55f113d91071b097ed41600d";//654321加密后的字符串
    Map<String, Object> resultMap = new LinkedHashMap<String, Object>();

    @RequestMapping("/index")
    public String web(){
        return "index";
    }

    @ResponseBody
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public Map<String, Object> adduser(String userName, String password){
        System.out.println("用户名："+userName);
        System.out.println("密码："+password);
        String url = null;
        if(!userName.equals("") && !userName.equals(null)) {
            String pswd = String.format("%s#%s", userName,password);
            pswd = MathUtil.getMD5(pswd);
            System.out.print("密码加密码："+pswd);
            if(userName.equals(NAME) && pswd.equals(PASSOWRD)) {
                resultMap.put("flag",true);
                url = "/fileupload";
                System.out.print(url);
                resultMap.put("status", 200);
                resultMap.put("back_url", url);
            }else {
                resultMap.put("message", "帐号或密码错误");
                resultMap.put("status",500);
                resultMap.put("flag",false);
            }
        }else {
            resultMap.put("status", 500);
            resultMap.put("flag",false);
        }
        return resultMap;
    }

    @RequestMapping(value = "/fileupload",method = RequestMethod.GET)
    public String fileupload(){
        return "fileupload";
    }
}

package com.ryda.action;

import com.ryda.dao.SecurityCode;
import com.ryda.dao.SecurityImage;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpServletRequest;
import java.io.ByteArrayInputStream;


public class ValidCodeAction extends ActionSupport {



    private static final long serialVersionUID = 5633780176793520460L;

       //图片流

    private ByteArrayInputStream imageStream;

    @Override

    public String execute() throws Exception {

       // TODO Auto-generated method stub

       try {

    	  // System.out.println("进入验证码action!");
           HttpServletRequest request = ServletActionContext.getRequest();

            String securityCode = SecurityCode.getSecurityCode();

            imageStream = SecurityImage.getImageAsInputStream(securityCode);

            //放入session中

            //session.put("securityCode", securityCode);

            System.out.println("securityCode = " + securityCode);

            request.getSession().setAttribute("securityCode", securityCode);

       } catch (Exception e) {

           e.printStackTrace();

       }

       return SUCCESS;

    }

    public ByteArrayInputStream getImageStream() {

       return imageStream;

    }

    public void setImageStream(ByteArrayInputStream imageStream) {

       this.imageStream = imageStream;

    }

}

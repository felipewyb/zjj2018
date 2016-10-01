package com.ryda.action;

import com.ryda.service.ILoginService;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpSession;

public class LoginAcion {
	private ILoginService ils;//service层
	private String username;
	private String password;
	private String vcode;
	private String returnValue;

	
	public String login(){

		HttpSession session = ServletActionContext.getRequest().getSession();
		String vcodeInSession = (String) session.getAttribute("securityCode");
		if (vcodeInSession.equals(vcode) == true) {
			String stauts = ils.login(username, password);

			if (stauts.equals("fila") == true) {
				setReturnValue("用户名或密码错误！请重新输入！");
				return "login";
			} else {
				return stauts;
			}

		}
		else{
			setReturnValue("验证码错误！请重新输入！");
			return "login";
		}


	}
	
	public String user(){
		if (returnValue != null) {
			setReturnValue(returnValue);
		} else {
			setReturnValue("请输入账号和密码以及验证码！");
		}
		return "login";
	}

	//注销
	public String logout(){

		//注销session
		HttpSession session = ServletActionContext.getRequest().getSession();
		session.invalidate();
		//返回登录页面

		return "logout";

	}


	public ILoginService getIls() {
		return ils;
	}

	public void setIls(ILoginService ils) {
		this.ils = ils;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public String getVcode() {
		return vcode;
	}

	public void setVcode(String vcode) {
		this.vcode = vcode;
	}

	public String getReturnValue() {
		return returnValue;
	}

	public void setReturnValue(String returnValue) {
		this.returnValue = returnValue;
	}
}

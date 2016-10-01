package com.ryda.action;

import com.ryda.service.ILoginService;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpSession;

public class LoginAcion {
	private ILoginService ils;//service层
	private String username;
	private String password;
	
	public String login(){
		String stauts= ils.login(username, password);
		//HttpSession session = ServletActionContext.getRequest().getSession();
		//User list =  (User) session.getAttribute("username"); 
		System.out.println(stauts);
		return stauts;
	}
	
	public String user(){
		
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
	
	
	
}

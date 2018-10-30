package com.ryda.service;

public interface ILoginService {
		
	//登陆
	public String login(String username, String password);

	String getLevelByUsername(int username);

	int getIntLevel(String username);
}

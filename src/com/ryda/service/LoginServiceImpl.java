package com.ryda.service;

import com.ryda.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;

public class LoginServiceImpl implements ILoginService {

	@Autowired
	private UserMapper mapper;

	
	@Override
	public String login(String username, String password) {
		HashMap map = new HashMap();
		map.put("username", username);
		map.put("password", password);
		List ulist = mapper.login(map);

		if (ulist.size()>0) {

			return "success";
		}else {
			return "fila";
		}
		
		
		
		
		
	}
}

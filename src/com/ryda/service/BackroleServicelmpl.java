package com.ryda.service;

import com.ryda.entity.Backrole;
import com.ryda.mapper.BackroleMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;


public class BackroleServicelmpl implements BackroleService {
	
	@Autowired
	private BackroleMapper mapper;
	
	
	@Override
	public List<Map<String,Object>> query() {
		// TODO Auto-generated method stub
		return mapper.queryBackRole();
	}

	@Override
	public void save(Backrole obj) {
		mapper.insertSelective(obj);
	}

	@Override
	public Backrole queryById(String id) {
		return mapper.selectByPrimaryKey(id);
	}

	@Override
	public void update(Backrole obj) {
		mapper.updateByPrimaryKey(obj);
	}

	@Override
	public void deleteOne(String id) {
		mapper.deleteByPrimaryKey(id);
	}

	@Override
	public void delete(String[] ids) {
		for (int i = 0; i < ids.length; i++) {
			mapper.deleteByPrimaryKey(ids[i]);
		}
	}

}

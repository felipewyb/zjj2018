package com.ryda.service;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;

import com.ryda.entity.Sijileixing;
import com.ryda.mapper.SijileixingMapper;

public class Sijileixinglmpl implements ISijileixingService {
	
	@Autowired
	private SijileixingMapper mapper;
	
	
	@Override
	public List<Map<String,Object>> query() {
		// TODO Auto-generated method stub
		return mapper.querySijileixing();
	}

	@Override
	public void save(Sijileixing obj) {
		// TODO Auto-generated method stub
		obj.setSijileixigId(UUID.randomUUID().toString());
		mapper.insertSelective(obj);
	}

	@Override
	public Sijileixing queryById(String id) {
		// TODO Auto-generated method stub
		return mapper.selectByPrimaryKey(id);
	}

	@Override
	public void update(Sijileixing obj) {
		// TODO Auto-generated method stub
		mapper.updateByPrimaryKey(obj);
	}

	@Override
	public void deleteOne(String id) {
		// TODO Auto-generated method stub
		mapper.deleteByPrimaryKey(id);
	}

	@Override
	public void delete(String[] ids) {
		// TODO Auto-generated method stub
		for (int i = 0; i < ids.length; i++) {
			mapper.deleteByPrimaryKey(ids[i]);
		}
	}

}

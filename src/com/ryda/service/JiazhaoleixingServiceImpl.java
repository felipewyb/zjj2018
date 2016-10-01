package com.ryda.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;

import com.ryda.entity.Jiazhaoleixing;
import com.ryda.entity.Sijileixing;
import com.ryda.mapper.JiazhaoleixingMapper;

public class JiazhaoleixingServiceImpl implements IJiazhaoleixingService {
	
	@Autowired
	private JiazhaoleixingMapper mapper;

	@Override
	public List query() {
		// TODO Auto-generated method stub
		return mapper.queryJiazhaoleixing();
	}

	@Override
	public void save(Jiazhaoleixing obj) {
		// TODO Auto-generated method stub
		obj.setJaizhaoleixingId(UUID.randomUUID().toString());
		mapper.insertSelective(obj);
	}

	@Override
	public Jiazhaoleixing queryById(String id) {
		// TODO Auto-generated method stub
		return mapper.selectByPrimaryKey(id);
	}

	@Override
	public void update(Jiazhaoleixing obj) {
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

	@Override
	public void save(Sijileixing obj) {
		// TODO Auto-generated method stub
		
	}
	

}

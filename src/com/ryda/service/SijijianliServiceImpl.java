package com.ryda.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;

import com.ryda.entity.Sijijianli;
import com.ryda.mapper.SijijianliMapper;

public class SijijianliServiceImpl implements ISijijianliService {
	@Autowired
	private SijijianliMapper mapper;

	@Override
	public List query() {
		// TODO Auto-generated method stub
		return mapper.querySijijianli();
	}

	@Override
	public void save(Sijijianli obj) {
		// TODO Auto-generated method stub
		obj.setSijijianliId(UUID.randomUUID().toString());
		mapper.insertSelective(obj);
	}

	@Override
	public Sijijianli queryById(String id) {
		// TODO Auto-generated method stub
		return mapper.selectByPrimaryKey(id);
	}

	@Override
	public void update(Sijijianli obj) {
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

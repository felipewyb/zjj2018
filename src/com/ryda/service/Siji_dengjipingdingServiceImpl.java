package com.ryda.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;

import com.ryda.entity.Siji_dengjipingding;
import com.ryda.mapper.JiazhaoleixingMapper;
import com.ryda.mapper.Siji_dengjipingdingMapper;

public class Siji_dengjipingdingServiceImpl implements ISiji_dengjipingdingService{

	@Autowired
	private Siji_dengjipingdingMapper mapper;

	@Override
	public List query() {
		// TODO Auto-generated method stub
		return mapper.queryDengji();
	}

	@Override
	public void save(Siji_dengjipingding obj) {
		// TODO Auto-generated method stub
		obj.setSijiDengjiid(UUID.randomUUID().toString());
		mapper.insertSelective(obj);
	}

	@Override
	public Siji_dengjipingding queryById(String id) {
		// TODO Auto-generated method stub
		return mapper.selectByPrimaryKey(id);
	}

	@Override
	public void update(Siji_dengjipingding obj) {
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

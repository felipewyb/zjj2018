package com.ryda.service;

import com.ryda.entity.Adlaunch;
import com.ryda.entity.Matype;
import com.ryda.mapper.AdlaunchMapper;
import com.ryda.mapper.MatypeMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;


public class AdlaunchServicelmpl implements AdlaunchService {
	
	@Autowired
	private AdlaunchMapper mapper;
	
	
	@Override
	public List<Map<String,Object>> query() {
		// TODO Auto-generated method stub
		return mapper.queryAdlaunch();
	}

	@Override
	public void save(Adlaunch obj) {
		mapper.insertSelective(obj);
	}

	@Override
	public Adlaunch queryById(String id) {
		return mapper.selectByPrimaryKey(id);
	}

	@Override
	public void update(Adlaunch obj) {
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

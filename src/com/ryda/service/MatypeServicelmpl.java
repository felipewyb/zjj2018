package com.ryda.service;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import com.ryda.mapper.MatypeMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.ryda.entity.Matype;


public class MatypeServicelmpl implements MatypeService {
	
	@Autowired
	private MatypeMapper matypeMapper;
	
	
	@Override
	public List<Map<String,Object>> query() {
		// TODO Auto-generated method stub
		return matypeMapper.queryMatype();
	}


	@Override
	public void save(Matype obj) {
		// TODO Auto-generated method stub
		matypeMapper.insertSelective(obj);
	}

	@Override
	public Matype queryById(Integer id) {
		// TODO Auto-generated method stub
		return matypeMapper.selectByPrimaryKey(id);
	}


	@Override
	public void update(Matype obj) {
		// TODO Auto-generated method stub
		matypeMapper.updateByPrimaryKey(obj);
	}

	@Override
	public void deleteOne(Integer id) {
		// TODO Auto-generated method stub
		matypeMapper.deleteByPrimaryKey(id);
	}

	@Override
	public void delete(int[] ids) {
		for (int i = 0; i < ids.length; i++) {
			matypeMapper.deleteByPrimaryKey(ids[i]);
		}
	}

	@Override
	public int checkforrepeat(Integer matype) {
		return matypeMapper.checkforrepeat(matype);
	}


}

package com.ryda.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;

import com.ryda.entity.Diqu;
import com.ryda.mapper.DiquMapper;

public class DiquServiceImpl implements IDiquService {
	@Autowired
	private DiquMapper  mapper;

	@Override
	public List query() {
		// TODO Auto-generated method stub
		return mapper.queryDiqu();
	}

	@Override
	public void save(Diqu obj) {
		// TODO Auto-generated method stub
		obj.setDiquId(UUID.randomUUID().toString());
		mapper.insertSelective(obj);
	}

	@Override
	public Diqu queryById(String id) {
		// TODO Auto-generated method stub
		return mapper.selectByPrimaryKey(id);
	}

	@Override
	public void update(Diqu obj) {
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
    public int count(String keyword) {
		//拼接查询SQL语句
		String sql=" 1=1 ";
		if(keyword!=null&&!"".equals(keyword)){

			sql+=" AND diqu_name LIKE  CONCAT('%', '"+keyword.trim()+"', '%') ";
		}
		//返回总条数
		return mapper.queryCount(sql);
    }

	@Override
	public List queryDiqu(String keyword, int i, int pageSize) {
		//拼接查询SQL语句
		String sql=" 1=1 ";
		if(keyword!=null&&!"".equals(keyword)){

			sql+=" AND diqu_name LIKE  CONCAT('%', '"+keyword.trim()+"', '%') ";
		}
		//拼接分页数据
		sql+="  order by diqu_name desc  limit "+i+" , "+pageSize;
		System.out.println("<<<<<<sql<<<<<<"+sql);

		return mapper.queryDiquForPage(sql);
	}
}

package com.ryda.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;

import com.ryda.entity.Siji;
import com.ryda.mapper.SijiMapper;

public class SijiServiceImpl implements ISijiService{
	@Autowired
	private  SijiMapper mapper;
	
	@Override
	public List query() {
		// TODO Auto-generated method stub
		return mapper.querySiji();
	}

	@Override
	public void save(Siji obj) {
		// TODO Auto-generated method stub
		obj.setSijiId(UUID.randomUUID().toString());
		mapper.insertSelective(obj);
	}

	@Override
	public Siji queryById(String id) {
		// TODO Auto-generated method stub
		return mapper.selectByPrimaryKey(id);
	}

	@Override
	public void update(Siji obj) {
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
	public List querySJLX() {
		// TODO Auto-generated method stub
		return mapper.querySJLX();
	}

	@Override
	public List querySSDQ() {
		// TODO Auto-generated method stub
		return mapper.querySSDQ();
	}

	@Override
	public List queryJZLX() {
		// TODO Auto-generated method stub
		return mapper.queryJZLX();
	}

    @Override
    public List queryDJPD() {
        return mapper.queryDJPD();
    }

    @Override
    public int count(String sjlxId, String jzlxId, String dqId, String djpdId, String keyword) {
		//拼接查询SQL语句
		String sql=" 1=1 ";
		if(keyword!=null&&!"".equals(keyword)){

			sql+=" AND siji_xingming LIKE  CONCAT('%', '"+keyword.trim()+"', '%') ";
		}
		if(sjlxId!=null&&!"".equals(sjlxId)){

			sql+=" AND sijileixig_id = '"+sjlxId+"'";
		}
		if(jzlxId!=null&&!"".equals(jzlxId)){

			sql+=" AND jaizhaoleixing_id = '"+jzlxId+"'";
		}
		if(dqId!=null&&!"".equals(dqId)){

			sql+=" AND diqu_id = '"+dqId+"'";
		}
		if(djpdId!=null&&!"".equals(djpdId)){

			sql+=" AND dejipingding_id = '"+djpdId+"'";
		}
		//返回总条数
		return mapper.queryCount(sql);
    }

	@Override
	public List querySiji(String sjlxId, String jzlxId, String dqId, String djpdId, String keyword, int i, int pageSize) {
		//拼接查询SQL语句
		String sql=" 1=1 ";
		if(keyword!=null&&!"".equals(keyword)){

			sql+=" AND siji_xingming LIKE  CONCAT('%', '"+keyword.trim()+"', '%') ";
		}
		if(sjlxId!=null&&!"".equals(sjlxId)){

			sql+=" AND sijileixig_id = '"+sjlxId+"'";
		}
		if(jzlxId!=null&&!"".equals(jzlxId)){

			sql+=" AND jaizhaoleixing_id = '"+jzlxId+"'";
		}
		if(dqId!=null&&!"".equals(dqId)){

			sql+=" AND diqu_id = '"+dqId+"'";
		}
		if(djpdId!=null&&!"".equals(djpdId)){

			sql+=" AND dejipingding_id = '"+djpdId+"'";
		}

		//拼接分页数据
		sql+="  order by siji_xingming desc  limit "+i+" , "+pageSize;
		System.out.println("<<<<<<sql<<<<<<"+sql);

		return mapper.querySijiForPage(sql);
	}


}

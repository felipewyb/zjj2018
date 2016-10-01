package com.ryda.mapper;

import com.ryda.entity.Siji;

import java.util.List;

public interface SijiMapper {
    int deleteByPrimaryKey(String sijiId);

    int insert(Siji record);

    int insertSelective(Siji record);

    Siji selectByPrimaryKey(String sijiId);

    int updateByPrimaryKeySelective(Siji record);

    int updateByPrimaryKey(Siji record);

	List querySJLX();

	List querySSDQ();

	List queryJZLX();

	List querySiji();

    List queryDJPD();

    int queryCount(String sql);

    List querySijiForPage(String sql);
}
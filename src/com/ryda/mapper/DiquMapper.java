package com.ryda.mapper;


import com.ryda.entity.Diqu;

import java.util.List;

public interface DiquMapper {
    int deleteByPrimaryKey(String diquId);

    int insert(Diqu record);

    int insertSelective(Diqu record);

    Diqu selectByPrimaryKey(String diquId);

    int updateByPrimaryKeySelective(Diqu record);

    int updateByPrimaryKey(Diqu record);

	List queryDiqu();

    int queryCount(String sql);

    List queryDiquForPage(String sql);
}
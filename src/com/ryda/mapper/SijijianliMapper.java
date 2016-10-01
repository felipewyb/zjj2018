package com.ryda.mapper;

import java.util.List;

import com.ryda.entity.Sijijianli;

public interface SijijianliMapper {
    int deleteByPrimaryKey(String sijijianliId);

    int insert(Sijijianli record);

    int insertSelective(Sijijianli record);

    Sijijianli selectByPrimaryKey(String sijijianliId);

    int updateByPrimaryKeySelective(Sijijianli record);

    int updateByPrimaryKey(Sijijianli record);
    
    List querySijijianli(); 
}
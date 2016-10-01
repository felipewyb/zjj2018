package com.ryda.mapper;

import java.util.List;

import com.ryda.entity.Siji_dengjipingding;

public interface Siji_dengjipingdingMapper {
    int deleteByPrimaryKey(String sijiDengjiid);

    int insert(Siji_dengjipingding record);

    int insertSelective(Siji_dengjipingding record);

    Siji_dengjipingding selectByPrimaryKey(String sijiDengjiid);

    int updateByPrimaryKeySelective(Siji_dengjipingding record);

    int updateByPrimaryKey(Siji_dengjipingding record);

	List queryDengji();
}
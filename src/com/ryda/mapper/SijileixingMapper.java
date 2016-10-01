package com.ryda.mapper;

import java.util.List;
import java.util.Map;

import com.ryda.entity.Sijileixing;

public interface SijileixingMapper {
    int deleteByPrimaryKey(String sijileixigId);

    int insert(Sijileixing record);

    int insertSelective(Sijileixing record);

    Sijileixing selectByPrimaryKey(String sijileixigId);

    int updateByPrimaryKeySelective(Sijileixing record);

    int updateByPrimaryKey(Sijileixing record);

    List<Map<String, Object>> querySijileixing();
}
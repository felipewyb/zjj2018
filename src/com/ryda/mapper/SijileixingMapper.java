package com.ryda.mapper;

import com.ryda.entity.Sijileixing;

import java.util.List;
import java.util.Map;

public interface SijileixingMapper {
    int deleteByPrimaryKey(String sijileixigId);

    int insert(Sijileixing record);

    int insertSelective(Sijileixing record);

    Sijileixing selectByPrimaryKey(String sijileixigId);

    int updateByPrimaryKeySelective(Sijileixing record);

    int updateByPrimaryKey(Sijileixing record);

    List<Map<String, Object>> querySijileixing();

    int checkforrepeat(String sjlx);
}
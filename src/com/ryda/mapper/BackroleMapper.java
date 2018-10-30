package com.ryda.mapper;

import com.ryda.entity.Backrole;

import java.util.List;
import java.util.Map;

public interface BackroleMapper {
    int deleteByPrimaryKey(String id);

    int insert(Backrole record);

    int insertSelective(Backrole record);

    Backrole selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Backrole record);

    int updateByPrimaryKey(Backrole record);

    List<Map<String, Object>> queryBackRole();
}
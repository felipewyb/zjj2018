package com.ryda.mapper;

import com.ryda.entity.Adlaunch;

import java.util.List;
import java.util.Map;

public interface AdlaunchMapper {
    int deleteByPrimaryKey(String id);

    int insert(Adlaunch record);

    int insertSelective(Adlaunch record);

    Adlaunch selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Adlaunch record);

    int updateByPrimaryKey(Adlaunch record);

    List<Map<String, Object>> queryAdlaunch();
}
package com.ryda.mapper;

import com.ryda.entity.Matype;

import java.util.List;
import java.util.Map;

public interface MatypeMapper {
    int deleteByPrimaryKey(Integer ttype);

    int insert(Matype record);

    int insertSelective(Matype record);

    Matype selectByPrimaryKey(Integer ttype);

    int updateByPrimaryKeySelective(Matype record);

    int updateByPrimaryKey(Matype record);

    List<Map<String, Object>> queryMatype();

    int checkforrepeat(int ttype);
}
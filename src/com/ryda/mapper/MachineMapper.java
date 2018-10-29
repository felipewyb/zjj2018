package com.ryda.mapper;

import com.ryda.entity.Machine;

import java.util.List;
import java.util.Map;

public interface MachineMapper {
    int insert(Machine record);

    int insertSelective(Machine record);

    List<Map<String, Object>> queryMachine();

    Machine selectByPrimaryKey(Integer ttype);

    int updateByPrimaryKeySelective(Machine record);


}
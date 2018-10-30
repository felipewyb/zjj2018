package com.ryda.mapper;

import com.ryda.entity.User;

import java.util.HashMap;
import java.util.List;

public interface UserMapper {
    int deleteByPrimaryKey(String userId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(String userId);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    List login(HashMap map);

    String getLevel(int id);

    int getIntLevel(String username);
}
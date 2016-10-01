package com.ryda.mapper;

import java.util.List;

import com.ryda.entity.Jiazhaoleixing;

public interface JiazhaoleixingMapper {
    int deleteByPrimaryKey(String jaizhaoleixingId);

    int insert(Jiazhaoleixing record);

    int insertSelective(Jiazhaoleixing record);

    Jiazhaoleixing selectByPrimaryKey(String jaizhaoleixingId);

    int updateByPrimaryKeySelective(Jiazhaoleixing record);

    int updateByPrimaryKey(Jiazhaoleixing record);

	List queryJiazhaoleixing();
}
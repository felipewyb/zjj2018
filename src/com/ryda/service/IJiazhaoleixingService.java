package com.ryda.service;

import java.util.List;

import com.ryda.entity.Jiazhaoleixing;
import com.ryda.entity.Sijileixing;

public interface IJiazhaoleixingService {

	List query();

	void save(Jiazhaoleixing obj);

	Jiazhaoleixing queryById(String id);

	void update(Jiazhaoleixing obj);

	void deleteOne(String id);

	void delete(String[] ids);

	void save(Sijileixing obj);



}

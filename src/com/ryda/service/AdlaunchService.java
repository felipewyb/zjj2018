package com.ryda.service;

import com.ryda.entity.Adlaunch;

import java.util.List;
import java.util.Map;

public interface AdlaunchService {

	List<Map<String,Object>> query();

	void save(Adlaunch obj);

	Adlaunch queryById(String id);

	void update(Adlaunch obj);

	void deleteOne(String id);

	void delete(String[] ids);


}

package com.ryda.service;

import java.util.List;
import java.util.Map;

import com.ryda.entity.Sijileixing;

public interface ISijileixingService {

	List<Map<String,Object>> query();

	void save(Sijileixing obj);

	Sijileixing queryById(String id);

	void update(Sijileixing obj);

	void deleteOne(String id);

	void delete(String[] ids);


}

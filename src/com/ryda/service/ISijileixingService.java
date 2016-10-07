package com.ryda.service;

import com.ryda.entity.Sijileixing;

import java.util.List;
import java.util.Map;

public interface ISijileixingService {

	List<Map<String,Object>> query();

	void save(Sijileixing obj);

	Sijileixing queryById(String id);

	void update(Sijileixing obj);

	void deleteOne(String id);

	void delete(String[] ids);


    int checkforrepeat(String sjlx);
}

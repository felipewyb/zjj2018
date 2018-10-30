package com.ryda.service;

import com.ryda.entity.Backrole;

import java.util.List;
import java.util.Map;

public interface BackroleService {

	List<Map<String,Object>> query();

	void save(Backrole obj);

	Backrole queryById(String id);

	void update(Backrole obj);

	void deleteOne(String id);

	void delete(String[] ids);


}

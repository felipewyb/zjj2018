package com.ryda.service;

import com.ryda.entity.Diqu;

import java.util.List;

public interface IDiquService {

	List query();

	void save(Diqu obj);

	Diqu queryById(String id);

	void update(Diqu obj);

	void deleteOne(String id);

	void delete(String[] ids);

    int count(String keyword);

	List queryDiqu(String keyword, int i, int pageSize);
}

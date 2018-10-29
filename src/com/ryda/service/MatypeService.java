package com.ryda.service;

import com.ryda.entity.Matype;

import java.util.List;
import java.util.Map;

public interface MatypeService {

	List<Map<String,Object>> query();

	void save(Matype obj);

	Matype queryById(Integer id);

	void update(Matype obj);

	void deleteOne(Integer id);

	void delete(int[] ids);


    int checkforrepeat(Integer matype);
}

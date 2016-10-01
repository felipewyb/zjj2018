package com.ryda.service;

import java.util.List;

import com.ryda.entity.Jiazhaoleixing;
import com.ryda.entity.Sijijianli;

public interface ISijijianliService {

	List query();

	void save(Sijijianli obj);

	Sijijianli queryById(String id);

	void update(Sijijianli obj);

	void deleteOne(String id);

	void delete(String[] ids);

}

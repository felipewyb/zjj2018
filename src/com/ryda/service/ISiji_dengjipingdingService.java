package com.ryda.service;

import java.util.List;

import com.ryda.entity.Siji_dengjipingding;

public interface ISiji_dengjipingdingService {

	List query();

	void save(Siji_dengjipingding obj);

	Siji_dengjipingding queryById(String id);

	void update(Siji_dengjipingding obj);

	void deleteOne(String id);

	void delete(String[] ids);

}

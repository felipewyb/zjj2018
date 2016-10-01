package com.ryda.service;

import com.ryda.entity.Siji;

import java.util.List;

public interface ISijiService {

	List query();

	void save(Siji obj);

	Siji queryById(String id);

	void update(Siji obj);

	void deleteOne(String id);

	void delete(String[] ids);

	List querySJLX();

	List querySSDQ();

	List queryJZLX();

    List queryDJPD();


    int count(String sjlxId, String jzlxId, String dqId, String djpdId, String keyword);

	List querySiji(String sjlxId, String jzlxId, String dqId, String djpdId, String keyword, int i, int pageSize);
}

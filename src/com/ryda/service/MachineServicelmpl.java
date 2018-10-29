package com.ryda.service;

import com.ryda.entity.Machine;
import com.ryda.entity.Matype;
import com.ryda.mapper.MachineMapper;
import com.ryda.mapper.MatypeMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;


public class MachineServicelmpl implements MachineService {
	
	@Autowired
	private MachineMapper machineMapper;
	
	
	@Override
	public List<Map<String,Object>> query() {
		// TODO Auto-generated method stub
		return machineMapper.queryMachine();
	}


	@Override
	public Machine queryById(Integer id) {
		// TODO Auto-generated method stub
		return machineMapper.selectByPrimaryKey(id);
	}

	@Override
	public void update(Machine obj) {
		machineMapper.updateByPrimaryKeySelective(obj);
	}


}

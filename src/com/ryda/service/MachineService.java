package com.ryda.service;

import com.ryda.entity.Machine;

import java.util.List;
import java.util.Map;

public interface MachineService {
    List<Map<String,Object>> query();

    Machine queryById(Integer id);

    void update(Machine obj);
}

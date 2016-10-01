package com.ryda.entity;

public class Diqu {
    private String diquId;

    private String diquName;

    public String getDiquId() {
        return diquId;
    }

    public void setDiquId(String diquId) {
        this.diquId = diquId == null ? null : diquId.trim();
    }

    public String getDiquName() {
        return diquName;
    }

    public void setDiquName(String diquName) {
        this.diquName = diquName == null ? null : diquName.trim();
    }
}
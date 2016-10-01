package com.ryda.entity;

public class Sijileixing {
    private String sijileixigId;

    private String leixingName;

    private String diquName;

    public String getSijileixigId() {
        return sijileixigId;
    }

    public void setSijileixigId(String sijileixigId) {
        this.sijileixigId = sijileixigId == null ? null : sijileixigId.trim();
    }

    public String getLeixingName() {
        return leixingName;
    }

    public void setLeixingName(String leixingName) {
        this.leixingName = leixingName == null ? null : leixingName.trim();
    }

    public String getDiquName() {
        return diquName;
    }

    public void setDiquName(String diquName) {
        this.diquName = diquName == null ? null : diquName.trim();
    }
}
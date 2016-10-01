package com.ryda.entity;

public class Siji_dengjipingding {
    private String sijiDengjiid;

    private String dengji;

    public String getSijiDengjiid() {
        return sijiDengjiid;
    }

    public void setSijiDengjiid(String sijiDengjiid) {
        this.sijiDengjiid = sijiDengjiid == null ? null : sijiDengjiid.trim();
    }

    public String getDengji() {
        return dengji;
    }

    public void setDengji(String dengji) {
        this.dengji = dengji == null ? null : dengji.trim();
    }
}
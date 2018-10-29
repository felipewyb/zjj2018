package com.ryda.entity;

public class Matype {
    private Integer ttype;

    private String tname;

    public Integer getTtype() {
        return ttype;
    }

    public void setTtype(Integer ttype) {
        this.ttype = ttype;
    }

    public String getTname() {
        return tname;
    }

    public void setTname(String tname) {
        this.tname = tname == null ? null : tname.trim();
    }
}
package com.ryda.entity;

public class Jiazhaoleixing {
    private String jaizhaoleixingId;

    private String jaizhaoleixingName;

    public String getJaizhaoleixingId() {
        return jaizhaoleixingId;
    }

    public void setJaizhaoleixingId(String jaizhaoleixingId) {
        this.jaizhaoleixingId = jaizhaoleixingId == null ? null : jaizhaoleixingId.trim();
    }

    public String getJaizhaoleixingName() {
        return jaizhaoleixingName;
    }

    public void setJaizhaoleixingName(String jaizhaoleixingName) {
        this.jaizhaoleixingName = jaizhaoleixingName == null ? null : jaizhaoleixingName.trim();
    }
}
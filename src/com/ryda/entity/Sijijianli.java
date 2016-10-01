package com.ryda.entity;

import java.util.Date;

public class Sijijianli {
    private String sijijianliId;

    private String jaizhaoleixingId;

    private String sijiXingbie;

    private String sijiShoujihao;

    private Date sijiAddtime;

    private String sijiSuoshudiqu;

    private Date sijiChushengriqi;

    private String sijiXingming;

    private String sijiJialing;

    private String sijiNianling;

    public String getSijijianliId() {
        return sijijianliId;
    }

    public void setSijijianliId(String sijijianliId) {
        this.sijijianliId = sijijianliId == null ? null : sijijianliId.trim();
    }

    public String getJaizhaoleixingId() {
        return jaizhaoleixingId;
    }

    public void setJaizhaoleixingId(String jaizhaoleixingId) {
        this.jaizhaoleixingId = jaizhaoleixingId == null ? null : jaizhaoleixingId.trim();
    }

    public String getSijiXingbie() {
        return sijiXingbie;
    }

    public void setSijiXingbie(String sijiXingbie) {
        this.sijiXingbie = sijiXingbie == null ? null : sijiXingbie.trim();
    }

    public String getSijiShoujihao() {
        return sijiShoujihao;
    }

    public void setSijiShoujihao(String sijiShoujihao) {
        this.sijiShoujihao = sijiShoujihao == null ? null : sijiShoujihao.trim();
    }

    public Date getSijiAddtime() {
        return sijiAddtime;
    }

    public void setSijiAddtime(Date sijiAddtime) {
        this.sijiAddtime = sijiAddtime;
    }

    public String getSijiSuoshudiqu() {
        return sijiSuoshudiqu;
    }

    public void setSijiSuoshudiqu(String sijiSuoshudiqu) {
        this.sijiSuoshudiqu = sijiSuoshudiqu == null ? null : sijiSuoshudiqu.trim();
    }

    public Date getSijiChushengriqi() {
        return sijiChushengriqi;
    }

    public void setSijiChushengriqi(Date sijiChushengriqi) {
        this.sijiChushengriqi = sijiChushengriqi;
    }

    public String getSijiXingming() {
        return sijiXingming;
    }

    public void setSijiXingming(String sijiXingming) {
        this.sijiXingming = sijiXingming == null ? null : sijiXingming.trim();
    }

    public String getSijiJialing() {
        return sijiJialing;
    }

    public void setSijiJialing(String sijiJialing) {
        this.sijiJialing = sijiJialing == null ? null : sijiJialing.trim();
    }

    public String getSijiNianling() {
        return sijiNianling;
    }

    public void setSijiNianling(String sijiNianling) {
        this.sijiNianling = sijiNianling == null ? null : sijiNianling.trim();
    }
}
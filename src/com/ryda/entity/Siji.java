package com.ryda.entity;

import java.util.Date;

public class Siji {
    private String sijiId;

    private String sijileixigId;

    private String jaizhaoleixingId;

    private String diquId;

    private String sijiShoujihao;

    private String sijiSuoshudiqu;

    private Date sijiChushengriqi;

    private String sijiXingming;

    private String sijiJialing;

    private String sijiNianling;

    private String dejipingdingId;

    public String getSijiId() {
        return sijiId;
    }

    public void setSijiId(String sijiId) {
        this.sijiId = sijiId == null ? null : sijiId.trim();
    }

    public String getSijileixigId() {
        return sijileixigId;
    }

    public void setSijileixigId(String sijileixigId) {
        this.sijileixigId = sijileixigId == null ? null : sijileixigId.trim();
    }

    public String getJaizhaoleixingId() {
        return jaizhaoleixingId;
    }

    public void setJaizhaoleixingId(String jaizhaoleixingId) {
        this.jaizhaoleixingId = jaizhaoleixingId == null ? null : jaizhaoleixingId.trim();
    }

    public String getDiquId() {
        return diquId;
    }

    public void setDiquId(String diquId) {
        this.diquId = diquId == null ? null : diquId.trim();
    }

    public String getSijiShoujihao() {
        return sijiShoujihao;
    }

    public void setSijiShoujihao(String sijiShoujihao) {
        this.sijiShoujihao = sijiShoujihao == null ? null : sijiShoujihao.trim();
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

    public String getDejipingdingId() {
        return dejipingdingId;
    }

    public void setDejipingdingId(String dejipingdingId) {
        this.dejipingdingId = dejipingdingId == null ? null : dejipingdingId.trim();
    }
}
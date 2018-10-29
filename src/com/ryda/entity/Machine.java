package com.ryda.entity;

public class Machine {
    private String id;

    private String code;

    private String gps;

    private Integer situation;

    private Integer elect;

    private String name;

    private String macode;

    private String shopname;

    private String shopadd;

    private String opname;

    private String phone;

    private Integer matype;

    private Double price;

    private Integer total;

    private Integer approve;

    private Integer consumo;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code == null ? null : code.trim();
    }

    public String getGps() {
        return gps;
    }

    public void setGps(String gps) {
        this.gps = gps == null ? null : gps.trim();
    }

    public Integer getSituation() {
        return situation;
    }

    public void setSituation(Integer situation) {
        this.situation = situation;
    }

    public Integer getElect() {
        return elect;
    }

    public void setElect(Integer elect) {
        this.elect = elect;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getMacode() {
        return macode;
    }

    public void setMacode(String macode) {
        this.macode = macode == null ? null : macode.trim();
    }

    public String getShopname() {
        return shopname;
    }

    public void setShopname(String shopname) {
        this.shopname = shopname == null ? null : shopname.trim();
    }

    public String getShopadd() {
        return shopadd;
    }

    public void setShopadd(String shopadd) {
        this.shopadd = shopadd == null ? null : shopadd.trim();
    }

    public String getOpname() {
        return opname;
    }

    public void setOpname(String opname) {
        this.opname = opname == null ? null : opname.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public Integer getMatype() {
        return matype;
    }

    public void setMatype(Integer matype) {
        this.matype = matype;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public Integer getApprove() {
        return approve;
    }

    public void setApprove(Integer approve) {
        this.approve = approve;
    }

    public Integer getConsumo() {
        return consumo;
    }

    public void setConsumo(Integer consumo) {
        this.consumo = consumo;
    }
}
package com.solabaev.springstocksapp.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class StocksDto {

    private Integer id;

    private Double priceUsd;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date dateUpd;

    private String name;

    private Double priceRub;

    private Double priceEur;

    private Double site;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getPriceUsd() {
        return priceUsd;
    }

    public void setPriceUsd(Double priceUsd) {
        this.priceUsd = priceUsd;
    }

    public Date getDateUpd() {
        return dateUpd;
    }

    public void setDateUpd(Date date) {
        this.dateUpd = date;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPriceRub() {
        return priceRub;
    }

    public void setPriceRub(Double priceRub) {
        this.priceRub = priceRub;
    }

    public Double getPriceEur() {
        return priceEur;
    }

    public void setPriceEur(Double priceEur) {
        this.priceEur = priceEur;
    }

    public Double getSite() {
        return site;
    }

    public void setSite(Double site) {
        this.site = site;
    }
}

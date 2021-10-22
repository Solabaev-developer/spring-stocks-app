package com.solabaev.springstocksapp.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "stocks")
@Component
public class Stocks implements Serializable {

    public Stocks() {
    }

    public Stocks(Double priceUsd, Date date, String name, Double priceRub, Double priceEur, String site) {
        this.priceUsd = priceUsd;
        this.dateUpd = date;
        this.name = name;
        this.priceRub = priceRub;
        this.priceEur = priceEur;
        this.site = site;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Double priceUsd;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date dateUpd;

    private String name;

    private Double priceRub;

    private Double priceEur;

    private String site;

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "id")
    public Integer getId() {
        return id;
    }

    @Column(name = "priceusd")
    public Double getPriceUsd() {
        return priceUsd;
    }

    public void setPriceUsd(Double priceUsd) {
        this.priceUsd = priceUsd;
    }

    @Column(name = "date")
    public Date getDateUpd() {
        return dateUpd;
    }

    public void setDateUpd(Date date) {
        this.dateUpd = date;
    }

    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "pricerub")
    public Double getPriceRub() {
        return priceRub;
    }

    public void setPriceRub(Double priceRub) {
        this.priceRub = priceRub;
    }

    @Column(name = "priceeur")
    public Double getPriceEur() {
        return priceEur;
    }

    public void setPriceEur(Double priceEur) {
        this.priceEur = priceEur;
    }

    @Column(name = "site")
    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }


    @Override
    public String toString() {
        return "Stocks{" +
                "id=" + id +
                ", PriceUsd=" + priceUsd +
                ", date=" + dateUpd +
                ", name='" + name + '\'' +
                ", PriceRub=" + priceRub +
                ", PriceEur=" + priceEur +
                '}';
    }
}

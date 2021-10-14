package com.solabaev.springstocksapp.entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "currencies")
public class Currencies implements Serializable {

    public Currencies(Integer id, Double usd, Double eur, Date date) {
        this.id = id;
        this.usd = usd;
        this.eur = eur;
        this.date = date;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Double usd;

    private Double eur;

    private Date date;

    public Currencies() {

    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Id
    public Integer getId() {
        return id;
    }

    public Double getUsd() {
        return usd;
    }

    public void setUsd(Double usd) {
        this.usd = usd;
    }

    public Double getEur() {
        return eur;
    }

    public void setEur(Double eur) {
        this.eur = eur;
    }

    public Date getDate() {
        return date;
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss")
    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Currencies{" +
                "id=" + id +
                ", usd=" + usd +
                ", eur=" + eur +
                ", date=" + date +
                '}';
    }
}

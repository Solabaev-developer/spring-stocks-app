package com.solabaev.springstocksapp.parcer;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.solabaev.springstocksapp.entity.Stocks;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

@Component
public class Parcer {
    private Long id;

    private Integer priceUsd;

    private Date date;

    private String name;

    private Integer priceRub;

    private Integer priceEur;

    private Document document;

    @Autowired
    public Parcer(Document document) {
        this.document = document;
    }

    public Double getPriceUsdFromDoc() {
        return Double.parseDouble(document.getElementsByClass("price left").text());
    }

    public String getNameFromDoc() {
        return document.getElementsByClass("ttl left indent_top_10 indent_right_10").text();
    }

    public Double getCurrencyUsd() {
        Elements elements = document.getElementsByClass("price");
        String price = elements.get(0).text();
        return Double.parseDouble(price);
    }

    public Double getCurrencyEur() {
        Elements elements = document.getElementsByClass("price");
        String price = elements.get(1).text();
        return Double.parseDouble(price);
    }
}

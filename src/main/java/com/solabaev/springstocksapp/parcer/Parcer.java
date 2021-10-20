package com.solabaev.springstocksapp.parcer;

import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Parcer {

    private final Document documentCurrencies;

    @Autowired
    public Parcer(
            @Qualifier("documentCurrencies") Document documentCurrencies) {
        this.documentCurrencies = documentCurrencies;
    }

    public Double getCurrencyUsd() {
        Elements elements = documentCurrencies.getElementsByClass("price");
        String price = elements.get(0).text();
        return Double.parseDouble(price);
    }

    public Double getCurrencyEur() {
        Elements elements = documentCurrencies.getElementsByClass("price");
        String price = elements.get(1).text();
        return Double.parseDouble(price);
    }
}

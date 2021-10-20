package com.solabaev.springstocksapp.parcer;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.io.IOException;


public class StocksParcer {

    private String url;

    public StocksParcer(String url) {
        this.url = url;
    }

    public Document getDocument(String url) {
        Document document = null;
        try {
            document = Jsoup.connect(url).get();
        } catch (IOException e) {
            System.out.println("Страница не найдена");
        }
        return document;
    }

    public Double getPriceUsdFromDoc() {
        return Double.parseDouble(getDocument(url).getElementsByClass("price left").text());
    }

    public String getNameFromDoc() {
        return getDocument(url).getElementsByClass("ttl left indent_top_10 indent_right_10").text();
    }
}

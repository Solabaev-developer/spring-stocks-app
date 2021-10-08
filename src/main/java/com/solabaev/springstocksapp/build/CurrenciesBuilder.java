package com.solabaev.springstocksapp.build;

import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.solabaev.springstocksapp.entity.Currencies;
import com.solabaev.springstocksapp.parcer.Parcer;

import java.util.Date;

@Component
public class CurrenciesBuilder {

    private Parcer parcer;

    private Document document;
    private Integer id = 0;

    @Autowired
    public CurrenciesBuilder(Document document, Parcer parcer) {
        this.document = document;
        this.id = id + 1;
        this.parcer = parcer;
    }



    public Currencies getCurrencies() {
        Double currencyUsd = parcer.getCurrencyUsd();
        Double currencyEur = parcer.getCurrencyEur();
        return new Currencies(this.id, currencyUsd, currencyEur, new Date());

    }
}

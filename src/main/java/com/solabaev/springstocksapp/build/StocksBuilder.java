package com.solabaev.springstocksapp.build;

import com.solabaev.springstocksapp.dao.CurrenciesDao;
import com.solabaev.springstocksapp.dao.impl.CurrenciesDaoImpl;
import com.solabaev.springstocksapp.dto.UrlDto;
import com.solabaev.springstocksapp.entity.Currencies;
import com.solabaev.springstocksapp.entity.Stocks;
import com.solabaev.springstocksapp.parcer.Parcer;
import com.solabaev.springstocksapp.parcer.StocksParcer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;


public class StocksBuilder {

    private final StocksParcer parcer;
    private final CurrenciesDaoImpl dao;

    public StocksBuilder(StocksParcer parcer, CurrenciesDaoImpl dao) {
        this.dao = dao;
        this.parcer = parcer;
    }

    public Stocks getCurrentStocks (UrlDto dto) {
        Currencies currencies = dao.getMaxCurrencies();
        String name = parcer.getNameFromDoc();
        Double usdPrice = parcer.getPriceUsdFromDoc();
        Date date = new Date();
        Double rubPrice = currencies.getUsd() * usdPrice;
        Double eurPrice = usdPrice * currencies.getUsd() / currencies.getEur();
        Stocks stocks = new Stocks(usdPrice, date, name, rubPrice, eurPrice, dto.getUrl());
        return stocks;
    }
}

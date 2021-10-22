package com.solabaev.springstocksapp.shedule;

import com.solabaev.springstocksapp.build.StocksBuilder;
import com.solabaev.springstocksapp.dao.impl.CurrenciesDaoImpl;
import com.solabaev.springstocksapp.dao.impl.StocksDaoImpl;
import com.solabaev.springstocksapp.dto.UrlDto;
import com.solabaev.springstocksapp.entity.Stocks;
import com.solabaev.springstocksapp.parcer.StocksParcer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class StocksUpdater {

    private final StocksDaoImpl dao;
    private final CurrenciesDaoImpl currenciesDao;
    private Stocks stocks;

    @Autowired
    public StocksUpdater(StocksDaoImpl dao, CurrenciesDaoImpl currenciesDao, Stocks stocks) {
        this.dao = dao;
        this.currenciesDao = currenciesDao;
        this.stocks = stocks;
    }

    @Scheduled(initialDelayString = "${scheduler.initialDelay}", fixedDelayString = "${scheduler.delay}") // TIMER = 24 * 60 * 60 * 1000
    public void doUpdateStocks() {
        UrlDto dto = new UrlDto();
        List<Stocks> list = dao.findAll();
        if (list.size() != 0) {
            for(Stocks stocks: list) {
                dto.setUrl(stocks.getSite());
                StocksParcer parcer = new StocksParcer(dto.getUrl());
                StocksBuilder builder = new StocksBuilder(parcer, currenciesDao);
                this.stocks = builder.getCurrentStocks(dto);
                this.stocks.setId(stocks.getId());
                dao.update(this.stocks);
            }
        }
    }
}

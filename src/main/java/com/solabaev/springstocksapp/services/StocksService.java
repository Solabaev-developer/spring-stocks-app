package com.solabaev.springstocksapp.services;

import com.solabaev.springstocksapp.dao.impl.StocksDaoImpl;
import com.solabaev.springstocksapp.entity.Stocks;

import java.util.List;

public class StocksService {

    public StocksService() {
    }

    private StocksDaoImpl stocksDao = new StocksDaoImpl();

    public Stocks findstocks(int id) {
        return stocksDao.findById(id);
    }

    public void savestocks(Stocks stocks) {
        stocksDao.save(stocks);
    }

    public void deletestocks(Stocks stocks) {
        stocksDao.delete(stocks);
    }

    public void updatestocks(Stocks stocks) {
        stocksDao.update(stocks);
    }

    public List<Stocks> findAllstockss() {
        return stocksDao.findAll();
    }
}

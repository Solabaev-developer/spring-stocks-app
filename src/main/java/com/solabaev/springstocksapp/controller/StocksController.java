package com.solabaev.springstocksapp.controller;

import com.solabaev.springstocksapp.build.StocksBuilder;
import com.solabaev.springstocksapp.dao.impl.CurrenciesDaoImpl;
import com.solabaev.springstocksapp.dao.impl.StocksDaoImpl;
import com.solabaev.springstocksapp.dto.StocksDto;
import com.solabaev.springstocksapp.dto.UrlDto;
import com.solabaev.springstocksapp.entity.Stocks;
import com.solabaev.springstocksapp.parcer.StocksParcer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.io.Serializable;
import java.util.List;

@CrossOrigin(origins = "http://localhost:1963/", maxAge = 3600, allowedHeaders = "*")
@RestController
@RequestMapping(
        value = "/stocks",
        produces = MediaType.APPLICATION_JSON_VALUE)
public class StocksController extends ResponseEntityExceptionHandler implements Serializable  {

    private final StocksDaoImpl dao;
    private final CurrenciesDaoImpl currenciesDao;

    @Autowired
    public StocksController(StocksDaoImpl dao, CurrenciesDaoImpl currenciesDao) {
        this.dao = dao;
        this.currenciesDao = currenciesDao;
    }

    @RequestMapping(
            value = {"/all"},
            method = {RequestMethod.GET},
            produces = {"application/json"}
    )
    public List<Stocks> getAllStocks() {
        return dao.findAll();
    }

    @RequestMapping(
            value = {"/{id}"},
            method = {RequestMethod.GET},
            produces = {"application/json"}
    )
    public Stocks getStocksId(@PathVariable Integer id) {
        return dao.findById(id);
    }

    @RequestMapping(
            value = {"/delete/{id}"},
            method = {RequestMethod.GET, RequestMethod.DELETE}
    )
    public void deleteStocks(@PathVariable int id) {

        Stocks stocks = getStocksId(id);
        dao.delete(stocks);
        System.out.println("Удаление успешно");
    }

    @RequestMapping(
            value = {"/add"},
            method = {RequestMethod.PUT}
    )
    public void addStocks(@RequestBody UrlDto dto) {

        StocksParcer parcer = new StocksParcer(dto.getUrl());
        StocksBuilder builder = new StocksBuilder(parcer, currenciesDao);
        dao.save(builder.getCurrentStocks(dto));
    }

    @RequestMapping(
            value = {"/update/{id}"},
            method = {RequestMethod.PUT}
    )
    public void updateStocks(@RequestBody StocksDto dto, @PathVariable Integer id) {
        Stocks stocks = new Stocks();
        stocks.setId(id);
        stocks.setDateUpd(dto.getDateUpd());
        stocks.setPriceUsd(dto.getPriceUsd());
        stocks.setPriceEur(dto.getPriceEur());
        stocks.setName(dto.getName());
        stocks.setPriceRub(dto.getPriceRub());
        dao.update(stocks);
    }

}

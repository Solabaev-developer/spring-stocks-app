package com.solabaev.springstocksapp.controller;

import com.solabaev.springstocksapp.build.CurrenciesBuilder;
import com.solabaev.springstocksapp.dao.impl.CurrenciesDaoImpl;
import com.solabaev.springstocksapp.dto.CurrenciesDto;
import com.solabaev.springstocksapp.entity.Currencies;
import com.solabaev.springstocksapp.services.CurrenciesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;

@CrossOrigin(origins = "http://localhost:1963/", maxAge = 3600, allowedHeaders = "*")
@RestController
@RequestMapping(
        value = "/currencies",
        produces = MediaType.APPLICATION_JSON_VALUE)
public class CurrenciesController implements Serializable {

    private CurrenciesService service;
    private final CurrenciesDaoImpl dao;
    private final CurrenciesBuilder currenciesBuilder;

    @Autowired
    public CurrenciesController(CurrenciesService service, @Qualifier("currenciesDaoImpl") CurrenciesDaoImpl dao, CurrenciesBuilder currenciesBuilder) {
        this.service = service;
        this.dao = dao;
        this.currenciesBuilder = currenciesBuilder;
    }

    @RequestMapping(
            value = {"/all"},
            method = {RequestMethod.GET},
            produces = {"application/json"}
    )
    public List<Currencies> getAllCurrencies() {
        return dao.findAll();
    }

    @RequestMapping(
            value = {"/{id}"},
            method = {RequestMethod.GET},
            produces = {"application/json"}
    )
    public Currencies getCurrencies(@PathVariable int id) {
        return dao.findById(id);
    }

    @RequestMapping(
            value = {"/delete/{id}"},
            method = {RequestMethod.GET, RequestMethod.DELETE}
    )
    public void deleteCurrencies(@PathVariable int id) {

        Currencies currencies = getCurrencies(id);
        dao.delete(currencies);
        System.out.println("Удаление успешно");
    }

    @RequestMapping(
            value = {"/add"},
            method = {RequestMethod.GET}
    )
    public void addCurrencies() {
        Currencies currencies = currenciesBuilder.getCurrencies();
        dao.save(currencies);
    }

    @RequestMapping(
            value = {"/update/{id}"},
            method = {RequestMethod.PUT},
            produces = {"application/json"}
    )
    public void updateCurrencies(@RequestBody CurrenciesDto dto, @PathVariable Integer id) {
        Currencies currencies = new Currencies();
        currencies.setId(id);
        currencies.setDate(dto.getDate());
        currencies.setUsd(dto.getUsd());
        currencies.setEur(dto.getEur());
        dao.update(currencies);
    }
}

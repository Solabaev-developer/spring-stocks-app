package com.solabaev.springstocksapp.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.solabaev.springstocksapp.dao.CurrenciesDao;
import com.solabaev.springstocksapp.dao.impl.CurrenciesDaoImpl;
import com.solabaev.springstocksapp.entity.Currencies;
import com.solabaev.springstocksapp.services.CurrenciesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:1963/", maxAge = 3600)
@RestController
@RequestMapping(
        value = "/currencies",
        produces = MediaType.APPLICATION_JSON_VALUE)
public class CurrenciesController implements Serializable {

    private CurrenciesService service;
    private final CurrenciesDaoImpl dao;

    @Autowired
    public CurrenciesController(CurrenciesService service, @Qualifier("currenciesDaoImpl") CurrenciesDaoImpl dao) {
        this.service = service;
        this.dao = dao;
    }

    /*@RequestMapping(
            value = {"currencies"},
            method = {RequestMethod.GET},
            produces = {"application/json"}
    )
    public Currencies getCurrencies() {

    }*/


    @RequestMapping(
            value = {"/all"},
            method = {RequestMethod.GET},
            produces = {"application/json"}
    )
        public List<Currencies> index() {
        return dao.findAll();
    }
}

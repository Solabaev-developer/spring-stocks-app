package com.solabaev.springstocksapp.services;


import com.solabaev.springstocksapp.dao.impl.CurrenciesDaoImpl;
import com.solabaev.springstocksapp.entity.Currencies;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CurrenciesService {

    public CurrenciesService() {
    }

    private CurrenciesDaoImpl currenciesDao = new CurrenciesDaoImpl();

    public Currencies findCurrencies(int id) {
        return currenciesDao.findById(id);
    }

    public void saveCurrencies(Currencies currencies) {
        currenciesDao.save(currencies);
    }

    public void deleteCurrencies(Currencies currencies) {
        currenciesDao.delete(currencies);
    }

    public void updateCurrencies(Currencies currencies) {
        currenciesDao.update(currencies);
    }

    public List<Currencies> findAllCurrencies() {
        return currenciesDao.findAll();
    }
}

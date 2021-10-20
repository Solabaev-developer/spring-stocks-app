package com.solabaev.springstocksapp.build;

import com.solabaev.springstocksapp.entity.Currencies;
import com.solabaev.springstocksapp.parcer.Parcer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class CurrenciesBuilder {

    private final Parcer parcer;

    @Autowired
    public CurrenciesBuilder(Parcer parcer) {
        this.parcer = parcer;
    }

    public Currencies getCurrencies() {
        Double currencyUsd = parcer.getCurrencyUsd();
        Double currencyEur = parcer.getCurrencyEur();
        return new Currencies(currencyUsd, currencyEur, new Date());

    }
}

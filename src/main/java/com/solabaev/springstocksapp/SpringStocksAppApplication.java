package com.solabaev.springstocksapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringStocksAppApplication {

    public static void main(String[] args) {

        System.setProperty("spring.devtools.restart.enabled", "false");
        SpringApplication.run(SpringStocksAppApplication.class, args);
    }

}

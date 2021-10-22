package com.solabaev.springstocksapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class SpringStocksAppApplication {

    public static void main(String[] args) {

        System.setProperty("spring.devtools.restart.enabled", "false");
        SpringApplication.run(SpringStocksAppApplication.class, args);
    }

}

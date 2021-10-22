package com.solabaev.springstocksapp.config;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.*;

import java.io.IOException;

@Configuration
@ComponentScan("com.solabaev.springstocksapp")
public class SpringConfig implements WebMvcConfigurer {
    @Value("https://investfunds.ru/indicators/currency/")
    private String url;

    @Autowired
    public SpringConfig(ApplicationContext applicationContext) {
    }

    @Bean
    @Qualifier("documentCurrencies")
    public Document getDocumentCurrencies() {
        Document document = null;
        try {
            document = Jsoup.connect(url).get();
        } catch (IOException e) {
            System.out.println("Страница не найдена");
        }
        return document;
    }

    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/homeview").setViewName("homeview");
    }

}

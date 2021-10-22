package com.solabaev.springstocksapp.dao.impl;

import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import com.solabaev.springstocksapp.dao.CurrenciesDao;
import com.solabaev.springstocksapp.entity.Currencies;
import com.solabaev.springstocksapp.util.HibernateSessionFactoryUtil;
import org.hibernate.query.Query;
import org.springframework.beans.propertyeditors.CurrencyEditor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;


import java.sql.Date;
import java.util.List;

@Repository
public class CurrenciesDaoImpl implements CurrenciesDao {

    public Currencies findById(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Currencies.class, id);
    }

    public void save(Currencies currencies) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(currencies);
        tx1.commit();
        session.close();
    }

    public void update(Currencies currencies) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.update(currencies);
        tx1.commit();
        session.close();
    }

    public void delete(Currencies currencies) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(currencies);
        tx1.commit();
        session.close();
    }

    public List<Currencies> findAll() {
        List<Currencies> currencies = (List<Currencies>)HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From Currencies").list();
        for (Currencies c : currencies) {
            System.out.println(c.getDate());
        }
        return currencies;
    }

    public Currencies getMaxCurrencies() {
        String sql = "select * from currencies where id = (select max(id) from currencies)";
        SQLQuery query = HibernateSessionFactoryUtil.getSessionFactory().openSession().createSQLQuery(sql);
        List<Object[]> rows = query.list();
        Integer id;
        Currencies currencies = new Currencies();
        for(Object[] row : rows){
            id = ((Integer) row[3]);
            currencies = HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Currencies.class, id);
        }
        return currencies;
    }
}

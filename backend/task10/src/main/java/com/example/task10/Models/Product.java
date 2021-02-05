package com.example.task10.Models;

import com.example.task10.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name= "Product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Integer id;
    private String name;
    private BigDecimal price;
    private int quantity;

    public Product(String this_name, BigDecimal this_price, Integer this_quantity) {
        super();
        this.name = this_name;
        this.price = this_price;
        this.quantity = this_quantity;
    }
    // the empty constructor below is required for all classes with a public constructor
    public Product(){
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
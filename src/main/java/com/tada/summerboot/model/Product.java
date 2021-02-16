package com.tada.summerboot.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE) // GenerationType.TABLE will allow auto-increment of id
    private Integer id;
    private String name;
    private String type;
    private BigDecimal price;
    private Integer quantity;


    @Column(nullable = true, length = 64)
    private String imageURL;

    // Required for the @OneToMany relationship with a User
    @Column(name = "user_id")
    private Integer user_id;

    public Integer getId() {
        return id;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public String getName() {
        return name;
    }

    public String getType() { return type; }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) { this.type = type; }

    public String getImageURL() {
        return imageURL;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public Product(Integer id, BigDecimal price, Integer quantity, String name, String type) {
        this.id = id;
        this.price = price;
        this.quantity = quantity;
        this.name = name;
        this.type = type;
    }

//
//    public Product(BigDecimal price, Integer quantity, String name, Integer user_id, String type, String imageURL) {
//        this.price = price;
//        this.quantity = quantity;
//        this.name = name;
//        this.user_id = user_id;
//        this.type = type;
//        this.imageURL = imageURL;
//    }

//    public Product(Integer id, BigDecimal price, Integer quantity, String name,  Integer user_id, String type) {
//        this.id = id;
//        this.price = price;
//        this.quantity = quantity;
//        this.name = name;
//        this.user_id = user_id;
//        this.type = type;
//    }
//

//
//    public Product(BigDecimal price, Integer quantity, String sku, String name, String description, String type) {
//        this.price = price;
//        this.quantity = quantity;
//        this.name = name;
//        this.type = type;
//    }

    public Product(BigDecimal price, Integer quantity, String name, String type, String imageURL){
        super();
    }

    @Override
    public String toString() {
        return "Product [id=" + id + ", name=" + name +
                ", name=" + name + ", price=" + price + ", quantity=" + quantity + "]";
    }
}

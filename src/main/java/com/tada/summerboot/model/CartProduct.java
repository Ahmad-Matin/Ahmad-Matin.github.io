package com.tada.summerboot.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class CartProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE) // GenerationType.TABLE will allow auto-increment of id
    private Integer id;

    @Column(nullable = true)
    private String title;

    @Column(nullable = true)
    public String productType;

    @Column(nullable = true)
    private String imageURL;

    @Column(nullable = true)
    private String description;

    @Column(nullable = true)
    private BigDecimal price;

    @Column(nullable = true)
    private Integer quantity;

    @Column(nullable = true)
    private String sku;


    // Required for the @OneToMany relationship with a User
    @Column(name = "user_id")
    private Integer user_id;

    public CartProduct(BigDecimal price, String sku, String title, String description, String imageURL, String productType, Integer user_id) {
        this.price = price;
        this.sku = sku;
        this.title = title;
        this.description = description;
        this.imageURL = imageURL;
        this.productType = productType;
        this.user_id = user_id;
    }


    public Integer getId() {
        return id;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public String getSku() {return sku;}

    public String getProductType() { return productType; }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getImageURL() {
        return imageURL;
    }

    public Integer getUser_id() {
        return user_id;
    }


    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public void setId(Integer id) {this.id = id;}

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setProductType(String productType) { this.productType = productType; }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

//    public CartProduct(BigDecimal price, Integer quantity, String sku, String title, String description, String imageURL, String productType, Integer user_id) {
//        this.price = price;
//        this.quantity = quantity;
//        this.sku = sku;
//        this.title = title;
//        this.description = description;
//        this.imageURL = imageURL;
//        this.productType = productType;
//        this.user_id = user_id;
//}
    public CartProduct(){
        super();
    }

    @Override
    public String toString() {
        return "Product [id=" + id + ", title=" + title +
                ", description=" + description + ", price=" + price + ", quantity=" + quantity + ", sku=" + sku + "]";
    }
}


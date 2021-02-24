package com.tada.summerboot.service;

import com.tada.summerboot.model.CartProduct;

import java.util.List;
import java.util.Optional;


public interface CartProductServiceInterface {
    // implement abstract methods of CRUD
    void createCartProduct(CartProduct newCartProduct);
    Optional<CartProduct> getCartProduct(Integer id);
    void updateCartProduct(CartProduct updatedCartProduct);
    void deleteCartProduct(Integer id);

    // an abstract method to get all products for all product page
    List<CartProduct> getAllCartProduct();

    // create or update product. Two in one method
     CartProduct createOrUpdateCartProduct(CartProduct entity);

    //Get a list of product of a User
    List<CartProduct> findAllByUserId(Integer id);
}

package com.tada.summerboot.controller;

import com.tada.summerboot.model.CartProduct;
import com.tada.summerboot.model.User;
import com.tada.summerboot.service.CartProductServiceImpl;
import com.tada.summerboot.service.UserServiceImpl;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;


@Controller
public class CartProductController {

    @Autowired
    CartProductServiceImpl cartproduct_service_implementation;

    @Autowired
    UserServiceImpl user_service_implementation;

    private static final Logger logger = LoggerFactory.getLogger(CartProductController.class);

    @GetMapping(value="/cart")
    public String everycartproduct(Model model) {
        List<CartProduct> list = cartproduct_service_implementation.getAllCartProduct();
        model.addAttribute("cartproducts", list);
        return "products";
    }

    @PostMapping(path="cart/new")
    public String newProduct(@RequestParam(name="price", required = false) BigDecimal price,
                             @RequestParam(name="sku", required = false) String sku,
                             @RequestParam(name="title", required = false) String title,
                             @RequestParam(name="description", required = false) String description,
                             @RequestParam(name="imageURL", required = false) String imageURL,
                             @RequestParam(name="productType", required=false) String productType,
                             @RequestParam(name="user_id", required = false) Integer user_id) {

        //        System.out.println("------*------");
        //        System.out.println("user_id" + user_id);

        CartProduct new_cartProduct = new CartProduct(price, sku, title, description, imageURL, productType, user_id);
        new_cartProduct.setQuantity(1);
        cartproduct_service_implementation.createOrUpdateCartProduct(new_cartProduct);
        return "redirect:/order";
    }


    @GetMapping(path = {"/cart/add/{id}"})
    public String addCartForm(@PathVariable("id") Integer id, Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = user_service_implementation.current_user(auth.getName());
        model.addAttribute("user", user);

        Optional<CartProduct> entity = cartproduct_service_implementation.getCartProduct(id);
        CartProduct updateCartProduct = entity.get();
        Integer currentQuantity = updateCartProduct.getQuantity();

        updateCartProduct.setQuantity(currentQuantity ++);

        cartproduct_service_implementation.createOrUpdateCartProduct(updateCartProduct);
        return "edit-product";
    }

    @GetMapping(path = {"/cart/subtract/{id}"})
    public String subtractCartForm(@PathVariable("id") Integer id, Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = user_service_implementation.current_user(auth.getName());
        model.addAttribute("user", user);
        Optional<CartProduct> entity = cartproduct_service_implementation.getCartProduct(id);
        CartProduct updateCartProduct = entity.get();
        Integer currentQuantity = updateCartProduct.getQuantity();
        updateCartProduct.setQuantity(currentQuantity --);
        cartproduct_service_implementation.createOrUpdateCartProduct(updateCartProduct);
        return "order";
    }




}

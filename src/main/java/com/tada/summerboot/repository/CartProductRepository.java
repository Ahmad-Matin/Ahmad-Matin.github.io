package com.tada.summerboot.repository;

import com.tada.summerboot.model.CartProduct;
import com.tada.summerboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartProductRepository extends JpaRepository<CartProduct, Integer> {
    @Query("SELECT n FROM CartProduct n WHERE n.user_id = ?1")
    List<CartProduct> findAllCartProductsByUserId(Integer user_id);
}

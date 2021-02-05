
package com.example.task10.Repository;

// creates the interface of database on springboot side

import com.example.task10.Models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

//// Use JPARepository
public interface ProductRepository extends JpaRepository <Product, String> {
    // This is creating error when autowired
    //    List<Product> findByProductName(String product_name);
}
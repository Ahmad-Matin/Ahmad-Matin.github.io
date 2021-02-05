package com.example.task10.Models;

import com.example.task10.Repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class ProductServiceImpl implements ProductService {

  //  private static Map<String, Product> productRepo = new HashMap<>();
    static {
   /*     Product furniture = new Product();
        furniture.setId("1");
        furniture.setName("Honey");
        productRepo.put(furniture.getId(), furniture);
    */
    }

    @Autowired
    private ProductRepository productRepo;

    @Override
    public void createProduct(Product product) {
      //  productRepo.put(product.getId(), product);
      productRepo.save(product);
    }

    @Override
    public void updateProduct(String id, Product product) {
  //      productRepo.remove(id);
  //      product.setId(id);
  //      productRepo.put(id, product);
    }

    @Override
    public void deleteProduct(String id) {

   //     productRepo.remove(id);
    }

   // @Override
   // public Collection<Product> getProducts() {

    //    return productRepo.values();
   // }
}
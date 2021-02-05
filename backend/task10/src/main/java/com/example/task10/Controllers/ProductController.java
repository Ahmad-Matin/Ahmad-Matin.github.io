package com.example.task10.Controllers;

import com.example.task10.Models.ProductServiceImpl;
import com.example.task10.Models.Product;
import com.example.task10.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Collection;

@RestController
//@RequestMapping(path = "products")

public class ProductController {
    @Autowired
    ProductServiceImpl productService;

   @Autowired
   private ProductRepository productRepo;
/*
    @RequestMapping(value = "/products")
    public ResponseEntity<Collection<Product>> getProduct() {
        return new ResponseEntity<Collection<Product>>(productService.getProducts(), HttpStatus.OK);
    }
*/
//localhost:8080/products/test
@GetMapping(path="/test") // Temporarily using GET for testing ONLY.
public @ResponseBody String test(@RequestParam(value="name")String this_name) {
    System.out.println(this_name);
    return "Added!";
}

    @RequestMapping(value = "/products/{id}", method = RequestMethod.PUT)
    public ResponseEntity<String>
    updateProduct(@PathVariable("id") String id, @RequestBody Product new_product) {
            //1. get the product called this_product
            //2.  set the new product details (new_product) to this_product

        productService.updateProduct(id, new_product);
        return new ResponseEntity<String>("Product is updated successfully", HttpStatus.OK);
    }
    @RequestMapping(value = "/products/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<String> delete(@PathVariable("id") String id) {
        productService.deleteProduct(id);
        return new ResponseEntity<>("Product is deleted successfully", HttpStatus.OK);
    }
    @RequestMapping(value = "/products", method = RequestMethod.POST)
    public ResponseEntity<String> createProduct(@RequestBody Product product) {
       // productService.createProduct(product);
        return new ResponseEntity<>("Product is created successfully", HttpStatus.CREATED);
    }

    @GetMapping(path="/new") // Temporarily using GET for testing ONLY.
    public @ResponseBody String addNewProduct() {
        Product new_product;
        new_product = new Product("nike", new BigDecimal(10.0), 10);
        productRepo.save(new_product);
        String page ="<style>\n" +
                ".container {\n" +
                "  height: 100%;\n" +
                "  position: relative;\n" +
                "}\n" +
                "\n" +
                ".center {\n" +
                "  margin: 0;\n" +
                "  position: absolute;\n" +
                "  top: 50%;\n" +
                "  left: 50%;\n" +
                "  -ms-transform: translate(-50%, -50%);\n" +
                "  transform: translate(-50%, -50%);\n" +
                ".btn {\n" +
            "border: none;\n"+
            "color: white;\n"+
            "padding: 14px 28px;\n"+
            "font-size: 16px;\n"+
            "cursor: pointer;\n"+
        "}\n" +
".success {background-color: green;}\n" +
".success:hover {background-color: #46a049;}\n" +
                "}\n" +
                "</style>\n" +
                "\n" +
                "<div class=\"container\">\n" +
                "  <div class=\"center\">\n" +
                "    <h1>ADDED!!</h1>\n" +
                "    <h1>CIAO BELLA!!</h1>\n" +
                "    <h1>CIAO BELLA!!CIAO!CIAO!!CIAO!!!</h1>\n"+
                "  </div>\n" +
                "</div>";
        return page;

    }
    //localhost:8080/test_more?name=darrek
    @GetMapping("/test_more")
    public @ResponseBody String test_more(@RequestParam(value="name") String your_name,
                             @RequestParam(value="email") String your_email,
                             @RequestParam(value="id") Integer your_id){
        System.out.println("hello, i received it");
        System.out.println("name:" +your_name);
        System.out.println("email:" + your_email);
        System.out.println("id:" + your_id);
        return "WTF";
    }
    //localhost:8080/postTest
    @PostMapping(path="/postTest")
    public @ResponseBody String postTest(@RequestParam(value="name", defaultValue="") String your_name,
                                 @RequestParam(value="email", defaultValue="") String your_email){
        System.out.println("hello, i received it");
        System.out.println("name:" +your_name);
        System.out.println("email:" + your_email);
        return "YAHOO";
    }
    //localhost:8080/user/101
    @GetMapping(path="/user/{id}")
    public @ResponseBody
    String showUser(@PathVariable("id") String this_id) {
        System.out.println("this is id->" + this_id);
        return "Using @PathVariable";
    }

}
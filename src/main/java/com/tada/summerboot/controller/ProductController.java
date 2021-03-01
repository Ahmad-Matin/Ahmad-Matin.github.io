package com.tada.summerboot.controller;

import com.tada.summerboot.model.Product;
import com.tada.summerboot.model.User;
import com.tada.summerboot.service.ProductServiceImpl;
import com.tada.summerboot.service.UserServiceImpl;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;

import java.lang.reflect.Array;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
public class ProductController {
    @Autowired
    ProductServiceImpl product_service_implementation;

    @Autowired
    UserServiceImpl user_service_implementation;

    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);


    @GetMapping(value="product-image") // it will be set to be /product
    public String productWithImage(Model model){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = user_service_implementation.current_user(auth.getName());
        model.addAttribute("user", user);
        model.addAttribute("product", new Product());
        return "product-image";
    }

    @GetMapping(value="/individual")
    public String everyproductByIndividual(Model model){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = user_service_implementation.current_user(auth.getName());
        List<Product> list = product_service_implementation.findAllByUserId(user.getId());
        model.addAttribute("products", list);
        return "individual";
    }

    @GetMapping(value="/guest-order")
    public String guestOrderPage(Model model){
        List<Product> list = product_service_implementation.getAllProduct();
        model.addAttribute("products", list);
        List<Product> burgers = product_service_implementation.getAllProduct();
        burgers.clear();
        List<Product> sides = product_service_implementation.getAllProduct();
        sides.clear();
        List<Product> desserts = product_service_implementation.getAllProduct();
        desserts.clear();
        for( int i=0;i< list.size();i++){
            switch (list.get(i).productType){
                case "burger":
                    burgers.add(list.get(i));
                    break;
                case "sides":
                    sides.add(list.get(i));
                    break;
                case "dessert":
                    desserts.add(list.get(i));
                    break;
            }
        }
        model.addAttribute("burgers", burgers);
        model.addAttribute("sides", sides);
        model.addAttribute("desserts", desserts);
        return "guest-products";
    }


    @GetMapping(value="/order")
    public String everyproduct(Model model){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        List<Product> list = product_service_implementation.getAllProduct();
        model.addAttribute("products", list);
        List<Product> burgers = product_service_implementation.getAllProduct();
        burgers.clear();
        List<Product> sides = product_service_implementation.getAllProduct();
        sides.clear();
        List<Product> desserts = product_service_implementation.getAllProduct();
        desserts.clear();
        for( int i=0;i< list.size();i++){
            switch (list.get(i).productType){
                case "burger":
                    burgers.add(list.get(i));
                    break;
                case "sides":
                    sides.add(list.get(i));
                    break;
                case "dessert":
                    desserts.add(list.get(i));
                    break;
            }
        }
        model.addAttribute("burgers", burgers);
        model.addAttribute("sides", sides);
        model.addAttribute("desserts", desserts);
        User user = user_service_implementation.current_user(auth.getName());
//        int[] postalsectors = {42, 43, 44, 45, 46, 47, 48, 49, 50, 81, 51, 52};
//        int userPostalCode = Integer.parseInt(user.getPostalcode());
//        user.setDeliveryCost("8");
//        for (int i = 0; i < postalsectors.length; i++) {
//            if(postalsectors[i] != userPostalCode) {
//                user.setDeliveryCost("10");
//                return user.deliveryCost;
//            }
//        }
        model.addAttribute("user", user);
//        model.addAttribute("deliveryCost", user.deliveryCost);
        return "products";
        }

// ADD ADMIN PAGE

    @GetMapping(value="/admin")
    public String adminproducts(Model model){
        List<Product> list = product_service_implementation.getAllProduct();
        model.addAttribute("products", list);
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = user_service_implementation.current_user(auth.getName());
        model.addAttribute("user", user);
        model.addAttribute("product", new Product());

        return "admin";
    }

    // this is for form-data
    @PostMapping(path="product/new")
    public String newProduct(@RequestParam(name="price", required = false) BigDecimal price,
                             @RequestParam(name="quantity", required = false) Integer quantity,
                             @RequestParam(name="sku", required = false) String sku,
                             @RequestParam(name="title", required = false) String title,
                             @RequestParam(name="description", required = false) String description,
                             @RequestParam(name="imageURL", required = false) String imageURL,
                             @RequestParam(name="productType", required=false) String productType,
                             @RequestParam(name="user_id", required = false) Integer user_id) {

        //        System.out.println("------*------");
        //        System.out.println("user_id" + user_id);

        Product new_product = new Product(price, quantity, sku, title, description, imageURL, productType, user_id);
        product_service_implementation.createOrUpdateProduct(new_product);
        return "redirect:/admin";
    }





    @RequestMapping(path="product/delete/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
    public String destroy(@PathVariable Integer id) {
        product_service_implementation.deleteProduct(id);
        return "redirect:/admin";
    }



    @GetMapping(path = {"/product/edit/{id}"})
    public String updateProductForm(@PathVariable("id") Integer id, Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = user_service_implementation.current_user(auth.getName());
        model.addAttribute("user", user);
        Optional<Product> updateProduct = product_service_implementation.getProduct(id);
        model.addAttribute("product", updateProduct.get());
        System.out.println(updateProduct);
        return "edit-product";
    }



    @PostMapping(path={"update/{id}"})
    public String updateProduct(@PathVariable("id") Integer id, Model model, Product updatedProduct) {
        product_service_implementation.createOrUpdateProduct(updatedProduct);
        return "redirect:/admin";
    }



    /*UNUSED*/



    //    // This is for Javascript
//    @PostMapping(path="product/json/new", produces = { MediaType.APPLICATION_JSON_VALUE })
//    public @ResponseBody String newProduct(@RequestBody Product product) {
//        product_service_implementation.createOrUpdateProduct(product);
//        return "{\"status\": \"success\"}";
//    }

//
//    @GetMapping(path="product/all", produces = { MediaType.APPLICATION_JSON_VALUE })
//    public @ResponseBody
//    List<Product> all() {
//        return product_service_implementation.getAllProduct();
//    }


    //    @RequestMapping(path = {"product/edit/{id}"})
//    public String editProduct(Model model, @PathVariable("id") Integer id)
//    {
//        if (id != null) { // id is present
//            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//            User user = user_service_implementation.current_user(auth.getName());
//            model.addAttribute("user", user);
//
//            Optional<Product> entity = product_service_implementation.getProduct(id);
//            model.addAttribute("product", entity.get());
//        } else { // when id is null, because it is not in the database, then we will just create a new entry in the database
//            model.addAttribute("product", new Product());
//        }
//        return "edit-product";
//    }

    //    @GetMapping(path="product/show/{id}")
//    public String show(Model model, @PathVariable Integer id) {
//        Optional<Product> product = product_service_implementation.getProduct(id);
//        model.addAttribute("product", product);
//        return "show";
//    }

//
//    @GetMapping(value="product") // it will be set to be /product
//    public String product(Model model){
//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        User user = user_service_implementation.current_user(auth.getName());
//
//        model.addAttribute("user", user);
//        model.addAttribute("product", new Product());
//        return "product";
//    }

    //    @PostMapping(path="product/image/new")
//    public String newProductWithImage(@RequestParam(name="price", required = false) BigDecimal price,
//                                      @RequestParam(name="quantity", required = false) Integer quantity,
//                                      @RequestParam(name="sku", required = false) String sku,
//                                      @RequestParam(name="title", required = false) String title,
//                                      @RequestParam(name="description", required = false) String description,
//                                      @RequestParam(name="user_id", required = false) Integer user_id,
//                                      @RequestParam(name="image", required = false) MultipartFile multipartFile) throws IOException {
//
//        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
////        System.out.println(fileName);
//        logger.debug("Hello from Logback {}");
//
////        System.out.println("------*------");
////        System.out.println("user_id" + user_id);
//
//        Product new_product = new Product(price, quantity, sku, title, description, user_id);
//        product_service_implementation.createOrUpdateProduct(new_product);
//        new_product.setImageURL("user-photos/uploads/"+ new_product.getId() + "/" + fileName);
//        product_service_implementation.createOrUpdateProduct(new_product);
//
////        String uploadDir = "user-photos/uploads/" + new_product.getId();
//        String uploadDir = "src/main/resources/static/user-photos/uploads/" + new_product.getId();
//        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
//        return "redirect:/every-products";
//    }


}
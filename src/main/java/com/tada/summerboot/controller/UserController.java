package com.tada.summerboot.controller;

import com.tada.summerboot.model.Product;
import com.tada.summerboot.model.User;
import com.tada.summerboot.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RequestMapping;
//import javax.servlet.http.HttpServletResponse;


import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;


@Controller
public class UserController {
    @Autowired
    UserServiceImpl user_service_implementation;

//    @GetMapping(path="/adminUsers")
//        public String administeringUsers(Model model){
//        List<User> list = user_service_implementation.getAllUsers();
//        model.addAttribute("users", list);
//        return "/adminUsers";
//    }

//    @PostMapping(path="/user/new")
//    public String newUser(@RequestParam(name="username", required=true) String username,
//                          @RequestParam(name = "firstname", required=true) String firstname,
//                          @RequestParam(name="lastname", required=true)String lastname,
//                          @RequestParam(name="address", required=true)String address,
//                          @RequestParam(name = "unitno", required = true)String unitno,
//                          @RequestParam(name = "postalcode", required = true)String postalcode,
//                          @RequestParam(name="password",required = true)String password,
//                          @RequestParam(name="email",required = true)String email){
//        User newUser = new User(username,firstname,lastname,address,unitno,postalcode,password,email);
//        user_service_implementation.createUser(newUser);
//        return "Saved";
//
//    }
    @PostMapping(path="/user/new")
    public String newUser(User newUser) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(newUser.getPassword());
        newUser.setPassword(encodedPassword);
        user_service_implementation.createUser(newUser);
        return "redirect:/";
    }

    @GetMapping(path="/login")
    public String login(Model model) {
        // if it is already login, redirect to the main page
        return "login";
        // if it is not login, show login
    }

    @GetMapping(path="/every-users")
    public String every(Model model) {
        List<User> list = user_service_implementation.getAllUsers();
        model.addAttribute("users", list);
//        return "every-users";
        return null;
    }

    @GetMapping(path="/register")
    public String register(User newUser) {
        return "register";
    }


    @GetMapping(path="/checkout/{id}")
    public String userCheckOut(Model model, @PathVariable Integer id) {
        Optional<User> user = user_service_implementation.getUser(id);
        model.addAttribute("user",user);
        return "checkout";
    }

    @GetMapping(path="/checkout")
    public String checkOutPage(){
        return "checkout";
    }

    @GetMapping(path="/user/all")
    public List<User> all(){
        return user_service_implementation.getAllUsers();
    }

    @GetMapping(path="/about-us")
    public String getAboutUs(){ return "about-us"; }

    @GetMapping(path="user/show/{id}")
    public String showuser(Model model, @PathVariable Integer id) {
        Optional<User> user = user_service_implementation.getUser(id);
        model.addAttribute("user", user);
        return "/show";
    }
}
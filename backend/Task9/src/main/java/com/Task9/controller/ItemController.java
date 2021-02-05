package com.Task9.controller;

import com.Task9.model.Item;
import com.Task9.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@Controller
@RequestMapping(path="/products")
public class ItemController {
    @Autowired
    private ItemRepository itemRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewItem(@RequestParam String name, @RequestParam String type,@RequestParam BigDecimal price, @RequestParam String imageUrl){
        Item n = new Item();
        n.setName(name);
        n.setType(type);
        n.setPrice(price);
        n.setImageUrl(imageUrl);
        itemRepository.save(n);
        return "Added";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @PostMapping(path="/update")
    public @ResponseBody String addNewItem(@RequestParam Integer id, @RequestParam String name, @RequestParam String type,@RequestParam BigDecimal price){
    id = id + 1;
    Item u = itemRepository.findById(id).get();
    u.setName(name);
    u.setType(type);
    u.setPrice(price);
    itemRepository.save(u);
    return "Updated";
    }





    }
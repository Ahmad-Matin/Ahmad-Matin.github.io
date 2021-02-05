package com.Task9.repository;

import org.springframework.data.repository.CrudRepository;
import com.Task9.model.Item;
//import org.springframework.stereotype.Repository;

//@Repository
public interface ItemRepository extends CrudRepository<Item, Integer> {

}

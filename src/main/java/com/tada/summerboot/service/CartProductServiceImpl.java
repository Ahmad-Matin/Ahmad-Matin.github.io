package com.tada.summerboot.service;

import com.tada.summerboot.model.CartProduct;
import com.tada.summerboot.model.Product;
import com.tada.summerboot.repository.CartProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartProductServiceImpl implements CartProductServiceInterface{
    @Autowired
    private CartProductRepository cartProductRepo;
    // Field injection is not recommended. Please read http://blog.marcnuri.com/field-injection-is-not-recommended/


    @Override
    public void createCartProduct(CartProduct newCartProduct) {
        cartProductRepo.save(newCartProduct);
    }

    @Override
    public Optional<CartProduct> getCartProduct(Integer id) {
        return cartProductRepo.findById(id);    }

    @Override
    public void updateCartProduct(CartProduct updatedCartProduct) {
        cartProductRepo.save(updatedCartProduct);
    }

    @Override
    public void deleteCartProduct(Integer id) {
        Optional<CartProduct> cartProduct = cartProductRepo.findById(id);
        if(cartProduct.isPresent()){
            cartProductRepo.delete(cartProduct.get());
        }
    }

    @Override
    public List<CartProduct> getAllCartProduct() {
        return cartProductRepo.findAll();
    }

    @Override
    public CartProduct createOrUpdateCartProduct(CartProduct entity) {
            if(entity.getId()  == null)
            {
                entity = cartProductRepo.save(entity);
                return entity;
            }
            else
            {
                Optional<CartProduct> cartProduct = cartProductRepo.findById(entity.getId());

                if(cartProduct.isPresent())
                {
                    CartProduct newEntity = cartProduct.get();
                    newEntity.setTitle(entity.getTitle());
                    newEntity.setPrice(entity.getPrice());
                    newEntity.setDescription(entity.getDescription());
                    newEntity.setSku(entity.getSku());
                    newEntity.setQuantity(entity.getQuantity());

                    newEntity = cartProductRepo.save(newEntity);

                    return newEntity;
                } else {

                    entity = cartProductRepo.save(entity);
                    return entity;
                }
            }
    }

        @Override
        public List<CartProduct> findAllByUserId(Integer id) {
            return cartProductRepo.findAllCartProductsByUserId(id);
        }

}

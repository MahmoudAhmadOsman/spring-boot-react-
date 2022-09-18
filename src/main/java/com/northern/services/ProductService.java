package com.northern.services;

import com.northern.daos.ProductDAO;
import com.northern.models.Product;
import com.northern.repository.ProductRepository;

import com.northern.utils.custom_exceptions.InvalidUserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.List;


@Service
public class ProductService implements ProductDAO<Product> {

    @Autowired
    private ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product save(Product product) throws IOException {
        if (product.getName().isEmpty() || product.getDescription().isEmpty() || product.getPrice() <= 0) {
            throw new InvalidUserException("\nProduct name fields are required!!!");
        }

        try {
            Product saveProduct = productRepository.save(product);
            return saveProduct;

        } catch (InvalidUserException e) {
            e.printStackTrace();
            throw new InvalidUserException("\nAll product fields are required!!");
        } catch (Exception e) {
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to save product to the database!!" + e);
        }

    }

    @Override
    public Product update(Product product) {
        return null;
    }

    @Override
    public void delete(String id) {

    }

    @Override
    public Product findById(String id) {
        return null;
    }

    @Override
    public List<Product> getAll() {
        return null;
    }



    /******* ProductService Validation methods *********/

    boolean isValidProductName(String name) {
        if (name.isEmpty()) throw new InvalidUserException( "\nProduct name is required!!" );
        if (name.length() <= 3) throw new InvalidUserException("\nProduct name must be more than 3 characters!!"  );
        return true;
    }


}

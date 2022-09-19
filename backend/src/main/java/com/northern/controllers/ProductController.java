package com.northern.controllers;


import com.northern.models.Product;
import com.northern.services.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")

@RequestMapping("/api/v1/")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    /*
     * @PostMapping = making a post request
     * @ResponseBody annotation tells a controller that the object returned a JSON.
     * @RequestBody annotation maps the HttpRequest body to a DTO.
     */


//Get All Products

    @GetMapping(value = "/products/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Product>> getAllProducts() throws IOException {
        List<Product> products = productService.getAll();
        return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
    }

    @PostMapping(value = "/products/create", consumes = "application/json", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Product> createProduct(@RequestBody Product product) throws IOException {
        Product createdProduct = productService.save(product);
        return new ResponseEntity<Product>(createdProduct, HttpStatus.CREATED);
    }


}

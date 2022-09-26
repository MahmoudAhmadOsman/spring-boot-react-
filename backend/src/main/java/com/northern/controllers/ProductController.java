package com.northern.controllers;


import com.northern.models.Product;
import com.northern.services.ProductService;
import com.northern.utils.custom_exceptions.InvalidUserException;
import com.northern.utils.custom_exceptions.NotFoundException;
import lombok.var;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
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


    //@Get
    @GetMapping(value = "/products/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Product>> getAllProducts() throws IOException {
        List<Product> products = productService.getAll();
        return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
    }

    //@Post
    @PostMapping(value = "/products/create", consumes = "application/json", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Product> createProduct(@RequestBody Product product) throws IOException {
        Product createdProduct = productService.save(product);
        return new ResponseEntity<Product>(createdProduct, HttpStatus.CREATED);
    }


    //@Delete
//    @DeleteMapping("/products/{id}")
//    public ResponseEntity<?> deleteProduct(@PathVariable("id") String id) {
//        System.out.println("delete route!!");
//        try {
//            productService.delete(id);
//            return new ResponseEntity<>("Product has been deleted successfully!!", HttpStatus.ACCEPTED);
//        } catch (Exception e) {
//            e.printStackTrace();
//            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
//
//        }
//    }



}

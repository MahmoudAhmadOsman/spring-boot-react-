package com.northern.controllers;

import com.northern.models.Product;
import com.northern.services.ProductService;
import com.northern.utils.custom_exceptions.InvalidUserException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/products")
public class ProductController {
    private final ProductService productService;

        Logger log = Logger.getGlobal();
    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    /*
     * @PostMapping = making a post request
     * @ResponseBody annotation tells a controller that the object returned a JSON.
     * @RequestBody annotation maps the HttpRequest body to a DTO.
     */


    // @GetMapping(value = "/products/list")
    @GetMapping(value = "/list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Product>> getAllProducts() throws IOException {
        List<Product> products = productService.getAll();
        return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
    }



    //@PostMapping(value = "/products/create")
    @PostMapping(value = "/save", consumes = "application/json", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Product> createProduct(@RequestBody Product product) throws IOException {
        Product createdProduct = productService.save(product);
        return new ResponseEntity<Product>(createdProduct, HttpStatus.CREATED);
    }




    @GetMapping(value = "/{id}")
    public Product findProductById(@PathVariable Long id) {
        try {
            return productService.findById(id);
        } catch (Exception e) {
            e.printStackTrace();
            throw new InvalidUserException("\nUnable to  find product with this id!! " + e.getMessage());
        }
    }


    @PutMapping(value = "/{id}")
    public Product updateProduct(@RequestBody Product product) {
        try {
            return productService.update(product);
        } catch (Exception e) {
            e.printStackTrace();
            throw new IllegalStateException("\nUnable to update product!! " + e.getMessage());
        }
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        log.info("Deleting product with an id of: " + id);
        try {
            productService.delete(id);
            return new ResponseEntity<>("Product has been deleted successfully!!", HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }

    }


}
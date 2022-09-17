package com.northern.daos;

import java.io.IOException;
import java.util.List;

public interface ProductDAO<Product> {

    Product save(Product product) throws IOException;

    Product update(Product product);

    void delete(String id);

    Product  findById(String id);

    List<Product> getAll();

}

package com.northern.daos;

import java.io.IOException;
import java.util.List;

public interface ProductDAO<Product> {

    Product save(Product product) throws IOException;

    Product update(Product product);

  void delete(Long id); // changed from Product to void - return type

    Product  findById(Long id);

    List<Product> getAll();

}

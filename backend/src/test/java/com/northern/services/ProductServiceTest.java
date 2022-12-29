package com.northern.services;

import com.northern.models.Product;
import com.northern.repository.ProductRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class ProductServiceTest {
    private ProductService sut;

    private final ProductRepository mockProductDAO = mock(ProductRepository.class);

    @Before
    public void setup() {
        sut = new ProductService(mockProductDAO);
    }

    @Test
    @DisplayName("Should return the product when the id is valid")
    public void findByIdWhenIdIsValid() {
        Product product = new Product(2L, "Mobile", "description", 1251);
        when(mockProductDAO.findById(2L)).thenReturn(java.util.Optional.of(product));

        Product result = sut.findById(2L);

        assertEquals(product, result);
    }

    @Test
    @DisplayName("Should throw an exception when the id is invalid")
    public void findByIdWhenIdIsInvalidThenThrowException() {
        Long id = 22L;
        when(mockProductDAO.findById(id)).thenReturn(null);

        try {
            sut.findById(id);
            fail("Should have thrown an exception");
        } catch (Exception e) {
            assertEquals("\nUnable to find product!!!", e.getMessage());
        }
    }

    //Test Product name
    @Test
    public void test_isValidProductName_givenCorrectProductName() {
        //A1 - Arrange
        String validProductName = "iPhone 12";
        //A2 - Act
        boolean flag = sut.isValidProductName(validProductName);
        //A3 - Assert
        Assert.assertTrue(flag);
    }
}
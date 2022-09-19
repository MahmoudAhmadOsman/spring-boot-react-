package com.northern.services;

import com.northern.daos.ProductDAO;
import com.northern.repository.ProductRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;

public class ProductServiceTest {
    private ProductService sut;

    private final ProductRepository mockProductDAO = mock(ProductRepository.class);

    @Before
    public void setup() {
        sut = new ProductService(mockProductDAO);
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
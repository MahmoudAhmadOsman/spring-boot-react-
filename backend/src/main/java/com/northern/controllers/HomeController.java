package com.northern.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@ResponseBody
public class HomeController {
    @RequestMapping("/")
    public String index() {
        return "Welcome to Northern";
    }


}

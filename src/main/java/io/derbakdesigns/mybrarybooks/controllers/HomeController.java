package io.derbakdesigns.mybrarybooks.controllers;

import io.derbakdesigns.mybrarybooks.models.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class HomeController {

    @GetMapping
    public String index() {
        return "index";
    }

}

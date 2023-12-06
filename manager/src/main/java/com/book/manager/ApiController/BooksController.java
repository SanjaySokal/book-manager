package com.book.manager.ApiController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.book.manager.Entity.Books;
import com.book.manager.Service.BooksImpl;

@RestController
public class BooksController {
    @Autowired
    private BooksImpl service;

    @GetMapping("/")
    private String hello() {
        return "Hello";
    }

    @PostMapping("/add")
    private boolean addBook(@RequestBody Books book) {
        return service.addBook(book);
    }
}

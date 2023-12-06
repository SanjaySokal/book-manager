package com.book.manager.ApiController;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.book.manager.Entity.Books;
import com.book.manager.Service.BooksImpl;

@CrossOrigin("http://localhost:3000/")
@RestController
public class BooksController {
    @Autowired
    private BooksImpl service;

    @GetMapping("/")
    private String hello() {
        return "Hii Welcome to the app";
    }

    @GetMapping("/books")
    private List<Books> getBooks() {
        return service.getAllBooks();
    }

    @PostMapping("/add")
    private boolean addBook(@RequestBody Books book) {
        return service.addBook(book);
    }

    @GetMapping("/get/{id}")
    private Books getBook(@PathVariable Long id) {
        return service.getBook(id);
    }

    @PostMapping("/update")
    private boolean updateBook(@RequestBody Books book) {
        return service.addBook(book);
    }

    @GetMapping("/delete/{id}")
    private boolean deleteBook(@PathVariable Long id) {
        return service.deleteBook(id);
    }

    @PostMapping("/delete")
    private boolean deleteOneBook(@RequestBody Books books) {
        return service.deleteBook(books);
    }
}

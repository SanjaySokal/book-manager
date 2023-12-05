package controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import entity.Book;
import service.Services;

@RestController
public class Controller {
    private Services services;
    @GetMapping("/")
    public List<Book> Hello() {
        return services.allBooksList();
    }
}

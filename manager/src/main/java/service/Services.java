package service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import entity.Book;
import repository.Repo;

@Service
public class Services {
    @Autowired
    private Repo repo;

    public List<Book> allBooksList() {
        return repo.findAll();
    }
}

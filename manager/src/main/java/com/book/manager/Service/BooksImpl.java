package com.book.manager.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.manager.Entity.Books;
import com.book.manager.Repository.BookRepo;

@Service
public class BooksImpl implements BookService {
    @Autowired
    private BookRepo repo;

    @Override
    public List<Books> getAllBooks() {
        return repo.findAll();
    }

    @Override
    public Books getBook(Long id) {
        return repo.findById(id).get();
    }

    @Override
    public boolean deleteBook(Long id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteBook(Books book) {
        Long id = book.getId();
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public boolean addBook(Books books) {
        repo.save(books);
        return true;
    }
}

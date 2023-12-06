package com.book.manager.Service;

import java.util.List;

import com.book.manager.Entity.Books;

public interface BookService {
    public List<Books> getAllBooks();

    public Books getBook(Long id);

    public boolean deleteBook(Long id);

    public boolean deleteBook(Books book);

    public boolean addBook(Books books);
}

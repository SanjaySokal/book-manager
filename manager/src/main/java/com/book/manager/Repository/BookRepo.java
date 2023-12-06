package com.book.manager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.manager.Entity.Books;

public interface BookRepo extends JpaRepository<Books, Long> {
}

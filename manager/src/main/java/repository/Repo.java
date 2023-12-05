package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.Book;

public interface Repo extends JpaRepository<Book, Integer> {
}

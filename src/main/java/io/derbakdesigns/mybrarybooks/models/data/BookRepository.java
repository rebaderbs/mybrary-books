package io.derbakdesigns.mybrarybooks.models.data;

import io.derbakdesigns.mybrarybooks.models.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends CrudRepository<Book, Integer> {

}

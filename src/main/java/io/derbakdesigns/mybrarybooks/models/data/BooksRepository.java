package io.derbakdesigns.mybrarybooks.models.data;

import io.derbakdesigns.mybrarybooks.models.Books;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksRepository extends CrudRepository<Books, Integer> {

}

package io.derbakdesigns.mybrarybooks.models.data;

import io.derbakdesigns.mybrarybooks.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

    User findByEmail(String email);

    User findById(int id);

}

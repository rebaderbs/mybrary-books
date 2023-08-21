package io.derbakdesigns.mybrarybooks.models;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Objects;


@Entity
public class User extends AbstractEntity{

    @NotNull
    @NotBlank(message = "First name is required")
    private String firstName;

    @NotNull
    @NotBlank(message = "Last name is required")
    private String lastName;

    @NotNull
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email. Please try again.")
    private String email;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    @NotNull
    private String pwHash;

    // this is where List of books will go. Inserting placeholder so I don't forget
    // @OneToMany(mappedBy = "user")
    // private final List<Book> books = new ArrayList<>();

    public User() {};

    public User(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.pwHash = encoder.encode(password);
    }

    public User(String email, String password) {
    }


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isMatchingPassword(String password)  {
        return encoder.matches(password, pwHash);
    }

    //placeholder for getBooks
    //public List<Book> getBooks() {
    // return books;
    //}
}

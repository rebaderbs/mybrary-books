package io.derbakdesigns.mybrarybooks.models;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


//@Data
@Entity
public class User {

    @Id
    @GeneratedValue
    private int id;

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


//    @ManyToMany(targetEntity=Books.class, fetch=FetchType.LAZY)
//    @JoinTable(name="user_book",inverseJoinColumns=@JoinColumn(name="book_id"))
    @OneToMany(mappedBy = "user")
    private List<Books> books = new ArrayList<>();

    public User(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.pwHash = encoder.encode(password);
    }

    public User(String email, String password) {
        this.email = email;
        this.pwHash = password;
    }

    public User() {};

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

//    @JsonManagedReference
    public List<Books> getBooks() {
     return books;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + pwHash + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

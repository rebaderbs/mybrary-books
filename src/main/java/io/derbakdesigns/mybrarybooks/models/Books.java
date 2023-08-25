package io.derbakdesigns.mybrarybooks.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import io.derbakdesigns.mybrarybooks.models.data.BooksRepository;
import io.derbakdesigns.mybrarybooks.models.data.UserRepository;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


//@EqualsAndHashCode(callSuper = true)
@Entity
//@Data
public class Books {

//    @Autowired
//    BooksRepository booksRepository;
//
//    @Autowired
//    UserRepository userRepository;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookId;

    @NotNull
    @NotBlank(message = "Book title is required")
    private String bookTitle;

    @NotNull
    @NotBlank(message = "Author name is required")
    private String bookAuthor;

    @NotNull
    @NotBlank(message = "Book format is required")
    private String bookFormat;

    @ManyToOne
    @JoinColumn(name="id")
//    @NotNull
//    @Valid
    private User user;

    @Transient
    public
    int id;

    public Books(String bookTitle, String bookAuthor, String bookFormat) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookFormat = bookFormat;
    }

    public Books(String bookTitle, String bookAuthor, String bookFormat, User user) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookFormat = bookFormat;
        this.user = user;
    }

    public Books(){};

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getBookTitle() {
        return bookTitle;
    }

    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }

    public String getBookAuthor() {
        return bookAuthor;
    }

    public void setBookAuthor(String bookAuthor) {
        this.bookAuthor = bookAuthor;
    }

    public String getBookFormat() {
        return bookFormat;
    }

    public void setBookFormat(String bookFormat) {
        this.bookFormat = bookFormat;
    }

//    @JsonManagedReference
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}

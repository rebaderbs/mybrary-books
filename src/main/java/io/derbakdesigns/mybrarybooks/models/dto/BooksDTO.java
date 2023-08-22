package io.derbakdesigns.mybrarybooks.models.dto;


import io.derbakdesigns.mybrarybooks.models.Books;
import io.derbakdesigns.mybrarybooks.models.User;
import lombok.Data;

import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class BooksDTO {

    private Books books;
    @NotBlank(message = "Book title is required")
    @NotNull
    private String bookTitle;

    @NotBlank(message = "Author name is required")
    @NotNull
    private String bookAuthor;

    @NotBlank(message = "Book format is required")
    @NotNull
    private String bookFormat;

    @ManyToOne
    private User user;

    public BooksDTO() {};

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

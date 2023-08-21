package io.derbakdesigns.mybrarybooks.models;

import lombok.EqualsAndHashCode;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

@EqualsAndHashCode(callSuper = true)
@Entity
public class Book extends AbstractEntity {

    @NotBlank(message = "Book title is required")
    private String bookTitle;

    @NotBlank(message = "Author name is required")
    private String bookAuthor;

    @NotBlank(message = "Book format is required")
    private String bookFormat;

    @ManyToOne(cascade = CascadeType.ALL)
    private User user;

    public Book(String bookTitle, String bookAuthor, String bookFormat, User user) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookFormat = bookFormat;
        this.user = user;
    }

    public Book(){};

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}

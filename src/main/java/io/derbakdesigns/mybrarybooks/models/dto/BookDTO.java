package io.derbakdesigns.mybrarybooks.models.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class BookDTO {

    @NotBlank(message = "Book title is required")
    @NotNull
    private String bookTitle;

    @NotBlank(message = "Author name is required")
    @NotNull
    private String bookAuthor;

    @NotBlank(message = "Book format is required")
    @NotNull
    private String bookFormat;

}

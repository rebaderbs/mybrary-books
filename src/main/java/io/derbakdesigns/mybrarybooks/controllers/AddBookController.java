package io.derbakdesigns.mybrarybooks.controllers;

import io.derbakdesigns.mybrarybooks.models.Books;
import io.derbakdesigns.mybrarybooks.models.User;
import io.derbakdesigns.mybrarybooks.models.data.BooksRepository;
import io.derbakdesigns.mybrarybooks.models.data.UserRepository;
import io.derbakdesigns.mybrarybooks.models.dto.BooksDTO;
import io.derbakdesigns.mybrarybooks.models.dto.RegisterFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.Optional;

@Controller
@RequestMapping("/")
public class AddBookController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    BooksRepository booksRepository;

    public User getUserFromSession(HttpSession session) {
        Integer id = (Integer) session.getAttribute(AuthenticationController.userSessionKey);
        if (id == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(id);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    @GetMapping("/addBook")
    public String displayAddBookPage(Model model, BooksDTO booksDTO, HttpServletRequest request) {
        User theUser = getUserFromSession(request.getSession());
        model.addAttribute("loggedInUser", theUser);
//        model.addAttribute("book", new Books());
//        model.addAttribute(new BooksDTO());
//        return "addBook";

        model.addAttribute(new BooksDTO());
        model.addAttribute("title", "Add Book");
        return "addBook";
    }

    @PostMapping("/addBook")
    public String processAddBookForm(@ModelAttribute @Valid BooksDTO booksDTO,
                                     Errors errors, HttpServletRequest request,
                                     Model model) {
        User theUser = getUserFromSession(request.getSession());
        model.addAttribute("loggedInUser", theUser);

        if (errors.hasErrors()) {
            model.addAttribute("title", "Add Book");
            return "addBook";
        }

        Books book = new Books(booksDTO.getBookTitle(), booksDTO.getBookAuthor(), booksDTO.getBookFormat(), theUser);
        booksRepository.save(book);

        return "dashboard";
    }
}

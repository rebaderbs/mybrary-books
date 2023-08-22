package io.derbakdesigns.mybrarybooks.controllers;

import io.derbakdesigns.mybrarybooks.models.Books;
import io.derbakdesigns.mybrarybooks.models.User;
import io.derbakdesigns.mybrarybooks.models.data.BooksRepository;
import io.derbakdesigns.mybrarybooks.models.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/books")
public class BooksController {

    @Autowired
    AuthenticationController authenticationController;

    @Autowired
    BooksRepository booksRepository;

    @Autowired
    UserRepository userRepository;

    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(AuthenticationController.userSessionKey);
        if (userId == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userId);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    @GetMapping("")
    public String displayAllBooks(Model model) {
        model.addAttribute("title", "Your books");
        model.addAttribute("books", booksRepository.findAll());

        return "books";
    }

//    @GetMapping("")
//    public String displayAllBooks(Model model, HttpServletRequest request) {
//        model.addAttribute("title", "Your books");
//        User theUser = getUserFromSession(request.getSession());
//        model.addAttribute("loggedInUser", theUser);
//        List<Books> result = theUser.getBooks();
//
//        if (result.isEmpty()) {
//            model.addAttribute("noBooks", "Aw shucks! You don't have any books on your shelf. Click Add Book to start your collection!");
//        }
//        else {
//            model.addAttribute("books", theUser.getBooks());
//        }
//        return "books";
//    }



}

package io.derbakdesigns.mybrarybooks;

import io.derbakdesigns.mybrarybooks.controllers.AuthenticationController;
import io.derbakdesigns.mybrarybooks.models.User;
import io.derbakdesigns.mybrarybooks.models.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class AuthenticationFilter implements HandlerInterceptor {

    @Autowired
    UserRepository userRepository;

    @Autowired
    AuthenticationController authenticationController;

//    private static final List<String> whitelist = Arrays.asList("/index", "/login", "/register", "/logout", "/css");

//    private static boolean isWhitelisted(String path) {
//        for (String pathRoot : whitelist) {
//            if (path.startsWith(pathRoot)) {
//                return true;
//            }
//        }
//        return false;
//    }

//    private static final List<String> notAllowedList = Arrays.asList("/dashboard", "/books", "/addBook");
//
//    private static boolean isAllowed(String path) {
//        for (String pathRoot : notAllowedList) {
//            if (path.startsWith(pathRoot)) {
//                return false;
//            }
//        }
//        return true;
//    }

//    @Override
//    public boolean preHandle(HttpServletRequest request,
//                             HttpServletResponse response,
//                             Object handler) throws IOException {
//
//        if (isWhitelisted(request.getRequestURI())) {
//            return true;
//        }
//
//        HttpSession session = request.getSession();
//        User user = authenticationController.getUserFromSession(session);
//
//        // The user is logged in
//        if (user != null) {
//            return true;
//        }
//
//        // The user is NOT logged in
//        response.sendRedirect("/login");
//        return false;
//    }
}

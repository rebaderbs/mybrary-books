# Mybrary Books
Your Ultimate Book Companion

![Logo](https://github.com/rebaderbs/mybrary-books/blob/main/src/main/resources/static/main-title.png)

## Overview
Mybrary Books is a web application that enables users to keep track of their own personal books.

The application was specifically designed with bibliophiles in mind. 

Users have the ability to create an account, log into that account, and log out of the account. Once logged in, a user is able to view their dashboard, add a book, and view all books. The view all books page displays a table of books, with Title, Author, and Format, with search capabilities so a user can easily find a book on their shelf. 

Non-authenticated users are able to browse all farms but cannot place orders. Any attempt made by non-authenticated users to perform actions other than viewing the home or about pages will be redirected to the login page.

## TECH STACK
Java, Spring Boot, Thymeleaf, MySQL, Hibernate, Bootstrap, HTML, CSS, Javascript

## Current Features
<!--
- Full CRUD database operations (Create, Read, Update, Delete)
-->
- Users can create an account (with authentication and authorization); 
- Users may save their books to their bookshelf, linking the user to the book within the database. The user is then able to view all of their books
- Users may utilize the search feature within the books view, to quickly find a book on their shelf
- State-driven navbar that changes depending on if a user is logged in or not
- The web application is fully functional and responsive in a mobile view 

## Future Development
* Style the project with a front-end framework (Angular, Vue, React) rather than Thymleaf
* User able to edit and delete books on their shelf
* Utilize a book api so user doesn't need to manually enter the book information
* Add a social aspect, so users can connect with friends and see what books are on their shelf
* Add a loan feature, so users can lend books to their friends and family and keep track of what is out


## Screenshots
![localhost_8080_](https://github.com/rebaderbs/mybrary-books/assets/106853517/9d01b5e4-fda3-4965-ae7b-ca3ee719277b)

![localhost_8080_about](https://github.com/rebaderbs/mybrary-books/assets/106853517/e35cd0cc-fb8c-4ae1-8fb7-7d1a00b733b5)

![localhost_8080_login](https://github.com/rebaderbs/mybrary-books/assets/106853517/63ad5983-afc4-4ee0-bee2-b3e8d0e1beb1)

![localhost_8080_books](https://github.com/rebaderbs/mybrary-books/assets/106853517/c9f3c225-b3ef-49d4-af3d-b088058d4b2c)


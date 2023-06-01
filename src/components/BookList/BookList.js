import React from "react";
import { useGlobalContext } from "../../context";
import Book from "./Book";
import { Hearts } from "react-loader-spinner";

const BookList = () => {

    const {books, loading, resultTitle} = useGlobalContext();
    const booksWithCovers = books.map((singleBook) => {
        return {
            ...singleBook,
            id: (singleBook.id).replace("/works/", ""),
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : "Image Not Found"
        }
    });

    if(loading) return 
                        <Hearts 
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="hearts-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />;

    return (
        <section className='booklist'>
            <div className='container'>
            <div className='section-title'>
                <h2>{resultTitle}</h2>
            </div>
            <div className='booklist-content grid'>
                {
                booksWithCovers.slice(0, 30).map((item, index) => {
                    return (
                    <Book key = {index} {...item} />
                    )
                })
                }
            </div>
            </div>
        </section>
        )
}

export default BookList;
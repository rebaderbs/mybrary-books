import React from 'react';
import { Link } from 'react-router-dom';

const Book = (books) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {books.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/books/${books.id}`} {...books}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{books.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          {/* <span>{book.author.join(", ")}</span> */}
          <span>{books.author}</span>
        </div>

        {/* <div className='book-item-info-item description fs-15'>
          <span className='text-capitalize fw-7'>Description: </span>
          <span>{book.description}</span>
        </div> */}

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{books.first_publish_year}</span>
        </div>
      </div>
    </div>
  )
}

export default Book
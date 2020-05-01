import React from "react";
import BookActions from "./BookActions";
import PropTypes from "prop-types";

const Book = ({ book, onMove, shelf }) => {
  const thumbnail = book.imageLinks
    ? book.imageLinks.thumbnail
    : "http://via.placeholder.com/128x188";
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${thumbnail})`,
          }}
        />
        <BookActions book={book} onMove={onMove} shelf={shelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? book.authors.join(", ") : "Unknown Author"}
      </div>
    </div>
  );
};

Book.propTypes = {
  shelf: PropTypes.string.isRequired,
  book: PropTypes.object.isRequired,
  onMove: PropTypes.func.isRequired,
};

export default Book;

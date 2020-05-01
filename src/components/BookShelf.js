import React from "react";
import Book from "./Book";

const BookShelf = ({ shelf, library, onMove }) => {
  const bookShelfData = {
    shelf: shelf,
    booksData: library
      .filter((book) => book.shelf === shelf.shelfId)
      .sort((a, b) => (a.title > b.title ? 1 : -1)),
  };
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {bookShelfData.shelf.title}{" "}
          <span className="bookshelf-counter">
            ({bookShelfData.booksData.length})
          </span>
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookShelfData.booksData.map((book) => (
              <li key={book.id}>
                <Book
                  key={book.id}
                  book={book}
                  onMove={onMove}
                  shelf={bookShelfData.shelf.shelfId}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default BookShelf;

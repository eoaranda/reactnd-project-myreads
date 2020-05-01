import React from "react";
import BookShelf from "./components/BookShelf";
import { Link } from "react-router-dom";
import Filter from "./components/Filter";

const ListBooks = ({ shelves, library, onMove, onFilter, shelfFilter }) => {
  const filteredOutShelves =
    shelfFilter.length > 0
      ? shelves.filter((shelf) => {
          return shelfFilter.includes(shelf.shelfId);
        })
      : shelves;

  return (
    <div className="list-books">
      <Filter onFilter={onFilter} shelves={shelves} selected={shelfFilter} />
      <div className="list-books-content">
        {filteredOutShelves.map((shelf, index) => (
          <BookShelf
            key={index}
            shelf={shelf}
            library={library}
            onMove={onMove}
            shelfFilter={shelfFilter}
          />
        ))}
      </div>
      <div className="open-search">
        <Link to="search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default ListBooks;

import React from "react";
import * as BooksAPI from "./utils/BooksAPI";
import Book from "./components/Book";

import SearchBar from "./components/SearchBar";

class AddBook extends React.Component {
  state = {
    mySearch: [],
  };

  clearResults = () => {
    this.setState(() => ({
      mySearch: [],
    }));
  };

  search = (searchText) => {
    //min 2 chars to start search
    if (searchText.length >= 2) {
      BooksAPI.search(searchText)
        .then((books) => {
          if (books.length > 0) {
            this.setState(() => ({
              mySearch: books,
            }));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    this.clearResults();
  };

  getBookShelf = (book) => {
    return book ? book.shelf : "";
  };

  render() {
    const { onMove, library } = this.props;

    return (
      <div className="search-books">
        <SearchBar search={this.search} />
        <div className="search-books-results">
          <div className="search-books-found">
            Found {this.state.mySearch.length} books
          </div>
          <ol className="books-grid">
            {this.state.mySearch.map((book) => (
              <li key={book.id}>
                <Book
                  key={book.id}
                  book={book}
                  onMove={onMove}
                  shelf={this.getBookShelf(
                    library.find((b) => b.id === book.id)
                  )}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default AddBook;

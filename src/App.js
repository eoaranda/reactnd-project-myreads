import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import NotFround from "./components/NotFound";
import AddBook from "./AddBook";
import ListBooks from "./ListBooks";
import "./App.css";

class BooksApp extends Component {
  state = {
    library: [],
    shelfFilter: [],
  };

  componentDidMount = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ library: books });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  moveBook = (book, toShelf) => {
    if (toShelf === "none") {
      this.setState({
        library: this.state.library.filter(
          (libraryBook) => libraryBook.id !== book.id
        ),
      });
    } else {
      book.shelf = toShelf;
      this.setState({
        library: this.state.library
          .filter((libraryBook) => libraryBook.id !== book.id)
          .concat(book),
      });
    }
    BooksAPI.update(book, toShelf);
  };

  filterBookShelf = (filter) => {
    if (this.state.shelfFilter.includes(filter)) {
      this.setState({
        shelfFilter: this.state.shelfFilter.filter((shelf) => shelf !== filter),
      });
    } else {
      this.setState({
        shelfFilter: [...this.state.shelfFilter, filter],
      });
    }
  };

  render() {
    const shelves = [
      {
        shelfId: "currentlyReading",
        title: "Currenlty Reading",
        link: "current",
      },
      {
        shelfId: "wantToRead",
        title: "Want to Read",
        link: "want",
      },
      {
        shelfId: "read",
        title: "Read",
        link: "read",
      },
    ];
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ListBooks
                shelves={shelves}
                onFilter={this.filterBookShelf}
                shelfFilter={this.state.shelfFilter}
                library={this.state.library}
                onMove={this.moveBook}
              />
            )}
          />
          <Route
            exact
            path="/(search|add)"
            render={() => (
              <AddBook onMove={this.moveBook} library={this.state.library} />
            )}
          />
          <Route component={NotFround} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;

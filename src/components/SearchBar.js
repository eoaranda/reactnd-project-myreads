import React from "react";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
  const handleSearch = (e) => {
    const value = e.target.value;
    props.search(value);
  };

  return (
    <div className="search-books-bar">
      <Link to="/">
        <button className="close-search">Return</button>
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;

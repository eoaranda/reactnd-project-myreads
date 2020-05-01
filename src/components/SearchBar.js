import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SearchBar = ({search}) => {
  const handleSearch = (e) => {
    const value = e.target.value;
    search(value);
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

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchBar;

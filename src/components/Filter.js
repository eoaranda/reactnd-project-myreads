import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Filters = ({ shelves, onFilter, selected }) => {
  const selectFilter = (shelfId) => {
    onFilter(shelfId);
  };

  return (
    <div className="header">
      <span className="logo">MyReads</span>
      <div className="header-right">
        <div className="filter" />
        {shelves.map((shelf, index) => (
          <Link
            onClick={() => selectFilter(shelf.shelfId)}
            key={index}
            className={selected.includes(shelf.shelfId) ? "active" : ""}
            to="/"
          >
            {shelf.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

Filters.propTypes = {
  shelves: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filters;

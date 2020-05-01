import React from "react";
import { Link } from "react-router-dom";

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

export default Filters;

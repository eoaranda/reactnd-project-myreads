import React from "react";
import PropTypes from "prop-types";

const BookActions = ({ shelf, onMove, book }) => {
  const moveShelf = (e) => {
    const { value } = e.target;
    onMove(book, value);
  };

  const currentShelf = shelf ? shelf : "none";
  return (
    <div className="book-shelf-changer">
      <select onChange={moveShelf} value={currentShelf}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookActions.propTypes = {
  shelf: PropTypes.string.isRequired,
  book: PropTypes.object.isRequired,
};

export default BookActions;

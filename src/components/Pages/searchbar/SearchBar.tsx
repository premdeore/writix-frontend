import React, { useState } from "react";
import "./SearchBar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`search-bar-container ${isFocused ? "focused" : ""}`}
    >
      {/* <label htmlFor="search-input" className="visually-hidden">
        Search
      </label> */}
      <input
        id="search-input"
        type="text"
        className="search-input"
        placeholder="Search here..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button className="search-icon" type="button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;

import { memo } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = memo(function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="search-container">
      <FiSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search users..."
        className="search-input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
});

export default SearchBar;
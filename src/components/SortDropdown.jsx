import { memo } from "react";
import { FiFilter } from "react-icons/fi";

const SortDropdown = memo(function SortDropdown({
  value,
  onChange,
}) {
  return (
    <div className="sort-container">
      <FiFilter className="sort-icon" />

      <select
        value={value}
        onChange={onChange}
        className="sort-dropdown"
      >
        <option value="asc">
          A to Z
        </option>

        <option value="desc">
          Z to A
        </option>
      </select>
    </div>
  );
});

export default SortDropdown;
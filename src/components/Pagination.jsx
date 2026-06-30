import { memo } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = memo(function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">

      <button
        className="page-button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FiChevronLeft />
        Previous
      </button>

      <div className="page-numbers">
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`page-number ${
              currentPage === page ? "active-page" : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="page-button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
        <FiChevronRight />
      </button>

    </div>
  );
});

export default Pagination;
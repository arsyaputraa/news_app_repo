import { useContext } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PaginationContext } from "../Providers/PaginationProvider";

function Pagination() {
  const [currentPage, setCurrentPage, maxPage, setMaxPage, onPageChange] =
    useContext(PaginationContext);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= maxPage) {
      onPageChange(page);
    }
  };

  const pages = Array.from({ length: maxPage }, (_, index) => index + 1);

  return (
    <div className="py-10 px-15 flex items-center justify-center gap-4">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className={`${
          currentPage === 1 ? "text-gray-500" : "text-black cursor-pointer"
        }`}
      >
        <FaChevronLeft />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={currentPage === page}
          className={`${
            currentPage === page
              ? "text-black font-semibold scale-110"
              : "text-gray-500"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === maxPage}
        onClick={() => handlePageChange(currentPage + 1)}
        className={`${
          currentPage === maxPage
            ? "text-gray-500"
            : "text-black cursor-pointer"
        }`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Pagination;

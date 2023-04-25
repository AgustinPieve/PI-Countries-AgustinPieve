import "./PaginationModule.css";


const Pagination = ({ countries, pagination, perPage, currentPage }) => {
    const pagesCount = countries === 250 ? 26 : Math.ceil(countries / perPage);
  
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(pagesCount, startPage + maxPagesToShow - 1);
  
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
  
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  
    const handleClick = (page) => {
      pagination(page);
    };
  
    return (
      <div className="pagination">
        <button
          className={currentPage !== 1 ? "pagination-button" : "disable"}
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
  
        {pageNumbers.map((number) => (
          <div key={number}>
            <button
              onClick={() => handleClick(number)}
              className={`buttonNumber ${
                currentPage === number ? "is-current" : ""
              }`}
            >
              {number}
            </button>
          </div>
        ))}
  
        <button
          className={currentPage !== pagesCount ? "pagination-button" : "disable"}
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === pagesCount}
        >
          Siguiente
        </button>
      </div>
    );
  };
  
  export default Pagination;
import React from "react";

const Paginacion = ({
  productsPorPagina,
  totalProducts,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPorPagina); i++) {
    pageNumbers.push(i);
  }

  const onAnteriorPagina = () => {
    setCurrentPage(currentPage - 1)
  } 

  const onSiguientePagina = () => {
    setCurrentPage(currentPage + 1)
  } 

  const onPaginaClick = (n) => {
    setCurrentPage(n)
  }
  return (
    <nav
      className="pagination is-centered  p-5"
      role="navigation"
      aria-label="pagination"
    >
      <button className={`pagination-previous ${currentPage === 1 ? 'is-disabled':''}`} onClick={onAnteriorPagina}>Anterior</button>
      <button className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled':''}`} onClick={onSiguientePagina}>Siguiente</button>
      <ul className="pagination-list">
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              className={`pagination-link ${
                page === currentPage ? "is-current" : ""
              }`}
              onClick={()=> onPaginaClick(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginacion;

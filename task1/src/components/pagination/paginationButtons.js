import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function PaginationButtons({
  currentPageIndex,
  setCurrentPageIndex,
  totalProducts,
}) {
  const pageLimit = 10;

  const totalNumberOfPages = Math.ceil(totalProducts.length / pageLimit);
  const pages = Array.from({ length: totalNumberOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => setCurrentPageIndex((next) => next + 1);
  const prevPage = () => setCurrentPageIndex((prev) => prev - 1);

  const handleChangePage = (index) => {
    if (index === pages.length - 1) {
      setCurrentPageIndex(0);
    }
    if (index <= 0) {
      setCurrentPageIndex(pages.length - 1);
    }
    setCurrentPageIndex(index);
  };

  return (
    <div className="buttons-container">
      <button
        onClick={prevPage}
        disabled={currentPageIndex === 0}
        aria-label="Previous page"
      >
        <ArrowBackIosIcon />
      </button>
      {pages.map((item, index) => (
        <button
          key={item}
          onClick={() => handleChangePage(index)}
          className={currentPageIndex === index ? "active" : ""}
          aria-label={`${
            currentPageIndex === index ? `Current page: ${index + 1}` : ``
          }`}
        >
          {item}
        </button>
      ))}
      <button
        onClick={nextPage}
        disabled={currentPageIndex === totalNumberOfPages - 1}
        aria-label="Next page"
      >
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
}

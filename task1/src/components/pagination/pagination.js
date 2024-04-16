import { useMemo } from "react";
import { CryptoTable } from "../cryptoTable/cryptoTable";
import "./pagination.scss";

import CustomToast from "../common/toast";
import { useGlobalContext } from "../../context/context";
import { PaginationButtons } from "./paginationButtons";

export function Pagination({
  totalProducts,
  currentPageIndex,
  setCurrentPageIndex,
}) {
  const { state } = useGlobalContext();
  const pageLimit = 10;

  const totalNumberOfPages = Math.ceil(totalProducts.length / pageLimit);

  const pageData = useMemo(() => {
    const startIndex = pageLimit * currentPageIndex;
    const endIndex = startIndex + pageLimit;

    return totalProducts.slice(startIndex, endIndex);
  }, [currentPageIndex, totalProducts]);

  return (
    <div className="pagination-container">
      {state.showToast && <CustomToast />}
      <CryptoTable cryptoData={pageData} />
      <PaginationButtons
        currentPageIndex={currentPageIndex}
        setCurrentPageIndex={setCurrentPageIndex}
        totalNumberOfPages={totalNumberOfPages}
        totalProducts={totalProducts}
      />
    </div>
  );
}

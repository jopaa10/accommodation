import { Pagination } from "../pagination/pagination";

export function CryptoList({
  loading,
  modifiedCryptoArray,
  currentPageIndex,
  setCurrentPageIndex,
}) {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (modifiedCryptoArray.length < 1) {
    return <p>no cryptocurrencies matched your search criteria </p>;
  }

  return (
    <Pagination
      totalProducts={modifiedCryptoArray}
      currentPageIndex={currentPageIndex}
      setCurrentPageIndex={setCurrentPageIndex}
    />
  );
}

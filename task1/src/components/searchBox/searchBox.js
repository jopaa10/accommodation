import { useEffect, useState } from "react";
import { fetchSearchCrypto } from "../../api/searchCrypto";
import "./searchBox.scss";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export function SearchBox({
  setModifiedCryptoArray,
  trendingCryptoCurrencies,
  setCurrentPageIndex,
  setLoading,
}) {
  const [timeoutId, setTimeoutId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isUserTyping, setIsUserTyping] = useState(false);
  const [isTimeoutFinished, setIsTimeoutFinished] = useState(false);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setCurrentPageIndex(0);
    setSearchTerm(searchTerm);
    setIsUserTyping(searchTerm !== "");
    clearTimeout(timeoutId);

    if (searchTerm === "") {
      setModifiedCryptoArray(trendingCryptoCurrencies.map((item) => item.item));
      return;
    }

    setTimeoutId(
      setTimeout(async () => {
        setIsTimeoutFinished(false);
        setLoading(true);
        const searchData = await fetchSearchCrypto(searchTerm);
        setModifiedCryptoArray(searchData.coins);
        setIsUserTyping(false);
        setIsTimeoutFinished(true);
        setLoading(false);
      }, 1000)
    );
  };

  const handleClearSearchInput = () => {
    if (!isUserTyping || isTimeoutFinished) {
      setSearchTerm("");
      setCurrentPageIndex(0);
      setModifiedCryptoArray(trendingCryptoCurrencies.map((item) => item.item));
      document.getElementById("search").focus();
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
      setIsTimeoutFinished(true);
      setLoading(false);
    };
  }, [timeoutId, setLoading]);

  return (
    <div className="search-container">
      <label htmlFor="search">Search for trending crypto currencies</label>
      <div className="search-container__input-container">
        <span>
          <SearchIcon fontSize="inherit" />
        </span>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search"
        />
        <button
          onClick={handleClearSearchInput}
          disabled={isUserTyping || !isTimeoutFinished || searchTerm === ""}
          className={`clear-button ${
            isUserTyping || !isTimeoutFinished || searchTerm === ""
              ? "disabled"
              : ""
          }`}
          aria-label="Clear search input"
        >
          <CloseIcon fontSize="inherit" />
        </button>
      </div>
    </div>
  );
}

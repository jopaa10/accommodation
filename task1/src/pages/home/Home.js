import { useEffect, useState } from "react";
import { SearchBox } from "../../components/searchBox/searchBox";
import { CryptoList } from "../../components/cryptoList/cryptoList";
import { PageTitle } from "../../components/common/pageTitle";
import { getTrendingCryptoCurrencies } from "../../api/getTrendingCrypto";
import "./home.scss";

function Home() {
  const [trendingCryptoCurrencies, setTrendingCryptoCurrencies] = useState([]);
  const [modifiedCryptoArray, setModifiedCryptoArray] = useState([]);
  let [loading, setLoading] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    const fetchCryptoData = async () => {
      try {
        const data = await getTrendingCryptoCurrencies();
        if (data && data.coins) {
          setTrendingCryptoCurrencies(data.coins);
          setModifiedCryptoArray(data.coins.map((item) => item.item));
        }
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="home-container">
      <PageTitle pageTitle={"home"} />
      <SearchBox
        setModifiedCryptoArray={setModifiedCryptoArray}
        trendingCryptoCurrencies={trendingCryptoCurrencies}
        setCurrentPageIndex={setCurrentPageIndex}
        setLoading={setLoading}
      />

      <CryptoList
        loading={loading}
        modifiedCryptoArray={modifiedCryptoArray}
        currentPageIndex={currentPageIndex}
        setCurrentPageIndex={setCurrentPageIndex}
      />
    </div>
  );
}
export default Home;

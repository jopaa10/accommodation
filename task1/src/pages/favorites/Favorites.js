import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/context";
import { PageTitle } from "../../components/common/pageTitle";
import "./favorites.scss";
import { Pagination } from "../../components/pagination/pagination";

function Favorites() {
  const { state } = useGlobalContext();
  const [favoritesData, setFavoritesData] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useEffect(() => {
    setFavoritesData(state.favorites);
  }, [state.favorites]);

  return (
    <div className="favorites-container">
      <PageTitle pageTitle={"favorites"} />
      {favoritesData && favoritesData.length > 0 ? (
        <Pagination
          totalProducts={favoritesData}
          currentPageIndex={currentPageIndex}
          setCurrentPageIndex={setCurrentPageIndex}
        />
      ) : (
        <p>Please add data to favorites to see it here</p>
      )}
    </div>
  );
}

export default Favorites;

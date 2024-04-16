import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useGlobalContext } from "../../context/context";
import { Actions } from "../../context/actions";
import "./favoriteButton.scss";

export function FavoriteButton({ row, data }) {
  let { state, dispatch } = useGlobalContext();

  const showToastWithTimeout = (message, actionType, payload, dispatch) => {
    dispatch({
      type: Actions.SHOW_TOAST,
      payload: { message },
    });

    const timeoutId = setTimeout(() => {
      dispatch({ type: Actions.HIDE_TOAST });
    }, 500);

    dispatch({ type: actionType, payload });

    return () => clearTimeout(timeoutId);
  };

  const handleAddToFavorites = (id) => {
    return showToastWithTimeout(
      "Added to favorites",
      Actions.ADD_TO_FAVORITES,
      data[id],
      dispatch
    );
  };

  const handleRemoveFromFavorites = (id) => {
    return showToastWithTimeout(
      "Removed from favorites",
      Actions.REMOVE_FROM_FAVORITES,
      { id },
      dispatch
    );
  };

  return state.favorites.find((item) => item.id === row.original.id) ? (
    <button
      className="favorite-button active"
      onClick={() => handleRemoveFromFavorites(row.original.id)}
      aria-label="Remove from favorites"
    >
      <StarRateIcon fontSize="inherit" />
    </button>
  ) : (
    <button
      className="favorite-button"
      onClick={() => handleAddToFavorites(row.id)}
      aria-label="Add to favorites"
    >
      <StarOutlineIcon fontSize="inherit" />
    </button>
  );
}

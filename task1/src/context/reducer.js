import { Actions } from "./actions";

export const reducer = (state, action) => {
  if (action.type === Actions.ADD_TO_FAVORITES) {
    const updatedFavorites = new Set([...state.favorites, action.payload]);
    const favoritesArray = [...updatedFavorites];

    localStorage.setItem("favorites", JSON.stringify(favoritesArray));

    return {
      ...state,
      favorites: favoritesArray,
    };
  }

  if (action.type === Actions.REMOVE_FROM_FAVORITES) {
    const updatedFavorites = state.favorites.filter(
      (item) => item.id !== action.payload.id
    );

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    return {
      ...state,
      favorites: updatedFavorites,
    };
  }

  if (action.type === Actions.SHOW_TOAST) {
    return {
      ...state,
      showToast: true,
      message: action.payload.message,
    };
  }

  if (action.type === Actions.HIDE_TOAST) {
    return {
      ...state,
      showToast: false,
    };
  }
};

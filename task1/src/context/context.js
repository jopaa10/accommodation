import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const favoritesFromLocalStorage = localStorage.getItem("favorites");

const initialState = {
  favorites:
    favoritesFromLocalStorage && favoritesFromLocalStorage.length > 0
      ? JSON.parse(favoritesFromLocalStorage)
      : [],
  showToast: false,
  message: "",
};

const CryptoContext = createContext(initialState);

export const CryptoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CryptoContext.Provider value={{ state, dispatch }}>
      {children}
    </CryptoContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CryptoContext);
};

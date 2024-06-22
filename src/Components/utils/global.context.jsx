import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  theme: "light",
  dentists: [],
  dentist: {},
  favDentists: JSON.parse(localStorage.getItem("favDentists")) || [],
};

export const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "GET_DENTIST":
      return { ...state, dentist: action.payload };
    case "ADD_FAVORITE":
      return { ...state, favDentists: [...state.favDentists, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favDentists: state.favDentists.filter(
          (dentist) => dentist.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addFavoriteDentist = (dentist) => {
    dispatch({ type: "ADD_FAVORITE", payload: dentist });
  };

  const removeFavoriteDentist = (dentistId) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: dentistId });
  };

  const getDentists = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "GET_DENTISTS", payload: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const setTheme = (newTheme) => {
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  const getDentistById = async (Id) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${Id}`
      );
      dispatch({ type: "GET_DENTIST", payload: response.data });
    } catch (error) {
      console.error("Error fetching dentist:", error);
    }
  };

  useEffect(() => {
    getDentists();
  }, []);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(state.theme);
  }, [state.theme]);

  useEffect(() => {
    localStorage.setItem("favDentists", JSON.stringify(state.favDentists));
  }, [state.favDentists]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        getDentists,
        setTheme,
        getDentistById,
        addFavoriteDentist,
        removeFavoriteDentist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
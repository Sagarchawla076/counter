import React, { useReducer, useContext } from "react";

const AppContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const AppProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ count, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;

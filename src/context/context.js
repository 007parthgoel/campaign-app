import React, { useContext } from "react";
import { useReducer } from "react";

import { CampaignTypes, Campaigns } from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();
const initialState = { CampaignTypes, Campaigns };

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

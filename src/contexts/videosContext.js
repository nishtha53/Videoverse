import { createContext, useContext, useReducer } from "react";
import { reducerFunction, initialState } from "../reducers/reducerFunction";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <VideosContext.Provider value={{ state, dispatch }}>
      {children}
    </VideosContext.Provider>
  );
};

export const useVideos = () => useContext(VideosContext);

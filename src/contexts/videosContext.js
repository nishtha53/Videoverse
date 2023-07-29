import { createContext, useContext, useReducer } from "react";
import { reducerFunction, initialState } from "../reducers/reducerFunction";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const filteredVideos = state?.searchInput
    ? state?.videos.filter((video) =>
        video?.title.toLowerCase().includes(state?.searchInput.toLowerCase())
      )
    : state?.videos;

  const isPresentInWatchLater = (videoToCheck) =>
    state.watchLaterVideos.find((video) => video?._id === videoToCheck?._id);

  return (
    <VideosContext.Provider
      value={{ state, dispatch, isPresentInWatchLater, filteredVideos }}
    >
      {children}
    </VideosContext.Provider>
  );
};

export const useVideos = () => useContext(VideosContext);

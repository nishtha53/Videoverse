import { categories, videos } from "../data/data";
import { actionTypes } from "../utils/constants";

const { ADD_TO_WATCH_LATER, REMOVE_FROM_WATCH_LATER, SET_SEARCH_INPUT } =
  actionTypes;

export const initialState = {
  categories: categories,
  videos: videos,
  watchLaterVideos: [],
  searchInput: "",
};

export const reducerFunction = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_WATCH_LATER:
      return {
        ...state,
        watchLaterVideos: [payload, ...state.watchLaterVideos],
      };
    case REMOVE_FROM_WATCH_LATER:
      return {
        ...state,
        watchLaterVideos: state.watchLaterVideos.filter(
          (video) => video?._id !== payload?._id
        ),
      };
    case SET_SEARCH_INPUT:
      return { ...state, searchInput: payload };
    default:
      return state;
  }
};

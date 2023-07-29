import { categories, videos } from "../data/data";

export const initialState = {
  categories: categories,
  videos: videos,
};

export const reducerFunction = (state, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

import { allMovies } from "../type/moviesType";

export const initalValue = { movies: [], pageCount: 0 };
//2- create reducer
export const moviesRed = (state = initalValue, action) => {
  switch (action.type) {
    case allMovies:
      return { movies: action.data ,pageCount:action.pages };
    default:
      return state;
  }
};

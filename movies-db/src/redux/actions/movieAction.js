import { allMovies, MovieApi } from "../type/moviesType";
import axios from "axios";
export const getAllMovies = () => {
  return async (dispatch) => {
    const res = await axios.get(MovieApi);

    dispatch({
      type: allMovies,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&anguage=ar`);
    dispatch({
      type: allMovies,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getPage = (num) => {
  return async (dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${num}`);

    dispatch({
      type: allMovies,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};


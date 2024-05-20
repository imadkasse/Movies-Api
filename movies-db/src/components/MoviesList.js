import React, { useEffect, useState } from "react";
import CardMovie from "./CardMovie";
import { Row } from "react-bootstrap";
import PaginationPage from "./PaginationPage";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/actions/movieAction";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getAllMovies());
  }, []);
  const dataMovies = useSelector((state) => state.movies);
  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);
  return (
    <Row className="mt-3">
      {dataMovies.length >= 1 ? (
        dataMovies.map((m) => {
          return <CardMovie key={m.id} m={m} />;
        })
      ) : (
        <h2 className="text-center p-5">لايوجد أفلام ...</h2>
      )}
      {dataMovies.length > 1 ? (
        <PaginationPage   />
      ) : null}
    </Row>
  );
}

export default MoviesList;

import React, { useEffect, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import CardMovie from "./components/CardMovie";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardDetails } from "./components/CardDetails";
import { useSelector, useDispatch } from "react-redux";
import { allMovies } from "./redux/type/moviesType";
import { getAllMovies } from "./redux/actions/movieAction";

function App() {
  
  
  

  return (
    <div className="font color-body">
      <NavBar  />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                />
              }
            />
            <Route path="/movie/:id" element={<CardDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllMovies, getMovieSearch, getPage } from "../redux/actions/movieAction";
import axios from "axios";

function NavBar() {
  const dispatch = useDispatch();
  const handelChange = (word) => {
    serach(word);
  };
  // Search films
  const serach = async (word) => {
    if (word === "") {
      dispatch(getAllMovies());

    } else {
      dispatch(getMovieSearch(word));
    }
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={require("./img/logo.png")} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input
                onChange={(e) => handelChange(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;

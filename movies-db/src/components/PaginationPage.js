import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMovies,
  getMovieSearch,
  getPage,
} from "../redux/actions/movieAction";
import axios from "axios";

const PaginationPage = () => {
  const [countPages, setCountPages] = useState(0);
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);
  

  const handlePageClick = (data) => {
    dispatch(getPage(data.selected + 1));
  };
  useEffect(() => {
    setCountPages(pages);
  }, [handlePageClick]);
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={500}
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-link"}
      previousLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationPage;

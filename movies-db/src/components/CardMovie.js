import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardMovie({ m }) {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${m.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + m.poster_path}
            className="card__image"
            alt="hu"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {m.title}</p>
              <p>تاريخ الاصدار:{m.release_date}</p>
              <p>عدد المقيمين: {m.vote_count}</p>
              <p>التقييم:{m.vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default CardMovie;

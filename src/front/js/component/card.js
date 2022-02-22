import React from "react";
import { Link } from "react-router-dom";
import { DetailCharacter } from "../pages/detailCharacter";

export const Card = (props) => {
  return (
    <div>
      <div
        className="card text-center text-white bg-dark m-3"
        style={{ width: "18rem" }}
      >
        <img src={props.img} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex justify-content-around">
            <Link to={props.detail}>
              <a href="#" className="btn btn-outline-warning fw-light">
                DETAIL
              </a>
            </Link>
            <a href="#" className="btn btn-outline-warning fw-light">
              <i className="far fa-heart" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

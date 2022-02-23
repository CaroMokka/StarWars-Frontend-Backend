import React from "react";
import { Link } from "react-router-dom";
import { DetailCharacter } from "../pages/detailCharacter";

export const Card = (props) => {
  return (

      <div
        className="card text-center text-white bg-black bg-opacity-75 border-warning m-3"
        style={{ width: "18rem" }}
      >
        <img src={props.img} className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <hr className="my-2 text-warning"/>
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
  
  );
};

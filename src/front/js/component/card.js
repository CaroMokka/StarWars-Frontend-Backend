import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) => {
  const { store, actions } = useContext(Context);



  return (
    <div
      className="card text-center text-white bg-black bg-opacity-75 border-warning m-3"
      style={{ width: "18rem" }}
    >
      <img src={props.img} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <hr className="my-2 text-warning" />
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        {!store.token ? (
          <div className="d-flex justify-content-around">
            <Link to={props.detail}>
              <a href="#" className="btn btn-outline-warning fw-light">
                DETAIL
              </a>
            </Link>
          </div>
        ) : (
          <div className="d-flex justify-content-around">
            <Link to={props.detail}>
              <a href="#" className="btn btn-outline-warning fw-light">
                DETAIL
              </a>
            </Link>
            <button className="btn btn-outline-warning fw-light" onClick={props.btn}>
              <i className="far fa-heart" />
            </button>
            
          </div>
        )}
      </div>
    </div>
    
  );
};

import React from "react";

export const Card = () => {
  return (
    <div>
      <div className="card text-center text-white bg-dark m-3" style={{ width: "18rem" }}>
        <img src="https://www.xtrafondos.com/wallpapers/resized/cara-guino-ilustracion-7942.jpg?s=large" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex justify-content-around">
          <a href="#" className="btn btn-outline-warning fw-light">
            DETAIL
          </a>
          <a href="#" className="btn btn-outline-warning fw-light">
            CORA
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

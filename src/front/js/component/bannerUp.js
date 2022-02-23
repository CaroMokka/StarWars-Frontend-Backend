import React from "react";

export const BannerUp = (props) => {
  return (
    <div className="container-fluid" >
      <div className="card bg-dark text-white">
        <img src={props.img} className="card-img" alt="..." />
        <div className="card-img-overlay col-4">
          <h1 className="card-title fw-bold display-3 border-bottom border-warning border-3">{props.name}</h1>
       
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>

        </div>
      </div>
    </div>
  );
};

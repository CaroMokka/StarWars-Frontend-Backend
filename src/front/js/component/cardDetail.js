import React from "react";

export const CardDetail = (props) => {
  return (
    <div className="container mt-3">
      <div className="card text-white bg-black bg-opacity-75 mb-3" style={{ width: "54rem"}}>
        <div className="row">
          <div className="col-md-4">
            <img src={props.img} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{props.name}</h2>
              <hr className="my-2"/>
              <p className="card-text">Birth date: {props.date}</p>
              <hr className=" w-50"/>
              <p className="card-text">Height: {props.height} cm</p>
              <hr className=" w-50"/>
              <p className="card-text">Hair Color: {props.hair_color}</p>
              <hr className=" w-50"/>
              <p className="card-text">Eyes Color: {props.eye_color}</p>
              <hr className=" w-50"/>
              <p className="card-text">Skin Color: {props.skin_color}</p>
              <hr className=" w-50"/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

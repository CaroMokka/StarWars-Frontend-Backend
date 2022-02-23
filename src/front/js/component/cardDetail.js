import React from "react";

export const CardDetail = (props) => {
  return (
    <div className="container mt-3">
      <div className="card text-white bg-black bg-opacity-75 mb-3 border-warning" style={{ width: "54rem"}}>
        <div className="row">
          <div className="col-md-4">
            <img src={props.img} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{props.name}</h2>
              <hr className="my-2"/>
              <p className="card-text">{props.date}{props.diameter}</p>
              <hr className=" w-50"/>
              <p className="card-text">{props.height}{props.population}</p>
              <hr className=" w-50"/>
              <p className="card-text">{props.hair_color}{props.climate}</p>
              <hr className=" w-50"/>
              <p className="card-text">{props.eye_color}{props.terrain}</p>
              <hr className=" w-50"/>
              <p className="card-text">{props.skin_color}</p>
         
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

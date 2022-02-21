import React from "react";
import "../../styles/jumbotron.css";

export const Jumbotron = () => {
  return (
    <div className="container bg-black bg-opacity-50 p-4">
      <div className="box-jumbotron">
        <div className="jumbotron">
          <div className="col-6 d-flex flex-column align-items-center p-4">
            <h3 className="text-light fw-bold">STAR WARS</h3>
            <h3 className="text-light">The Book Of</h3>
            <h1 className="display-1 fw-bold text-white">BOBA FETT</h1>
            <span className="text-light fw-bold">
              All episodes now streaming, only on Disney+.
            </span>
            <div className="border border-6 border-light w-50 my-4"></div>
            <span className="text-light px-5">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </span>
            <div className="btn mt-4">
            <span className="lead text-light me-3">
              <a
                className="btn btn-danger btn-lg"
                href="#"
                role="button"
              >
                STREAM NOW
              </a>
            </span>

            <span className="lead text-light ms-3">
              <a
                className="btn btn-dark btn-lg"
                href="#"
                role="button"
              >
                EXPLORE
              </a>
            </span>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

import React from "react";

export const BannerDown = () => {
  return (
    <div className="container  rounded-0 border-0 ">
      <div className="card bg-dark text-white text-center">
        <img src="https://lumiere-a.akamaihd.net/v1/images/bobf-disneyplus-anchor-singlehero-desktop_ec5bc913.jpeg?region=0,0,1536,864" className="card-img" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-end mb-5">
          <h3 className="card-title ">A GALAXY OF <span className="fst-italic fw-bold"> STAR WARS </span> MOVIES & SERIES ON DISNEY+.</h3>
          <h5 className="card-text">
            Take your first steps into a large world -- start streaming now!
          </h5>
        
        </div>
      </div>
    </div>
  );
};

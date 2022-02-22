import React from "react";

export const BannerUp = () => {
  return (
    <div className="container" >
      <div className="card bg-dark text-white">
        <img src="https://starwarsblog.starwars.com/wp-content/uploads/2021/08/jedi-name-scramble-COLLAGE_TALL-RATIOS-BLASTER-DOOR-1536x512.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h1 className="card-title fw-bold display-1">CHARACTERS</h1>
          <hr className="w-50" size="10" style={{color:"#FFF"}} />
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>

        </div>
      </div>
    </div>
  );
};

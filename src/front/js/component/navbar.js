import React from "react";
import { Link } from "react-router-dom";
import sw from "../../img/logo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <div className="container-fluid bg-black">
      <div className="row">
        <div className="col-3">
          <Link to="/">
            <img className="logo my-2" src={sw} />
          </Link>
        </div>
        <div className="col-6 d-flex justify-content-center my-auto">
          <Link to="/characters" style={{ textDecoration: "none" }}>
            <span className="text-light mx-3 fw-light">CHARACTERS</span>
          </Link>
          <div class="vr text-white"></div>
          <Link to="/planets" style={{ textDecoration: "none" }}>
            <span className="text-light mx-3 fw-light">PLANETS</span>
          </Link>
          <div class="vr text-white"></div>
          <Link to="/starships" style={{ textDecoration: "none" }}>
            <span className="text-light mx-3 fw-light">STARSHIPS</span>
          </Link>
        </div>

        <div className="col-3 d-flex justify-content-center my-auto">
          <Link className="mx-2" to="/signup">
            <button className="btn btn-outline-warning fw-light">Sign Up</button>
          </Link>
          <Link className="mx-2" to="/login">
            <button className="btn btn-outline-warning fw-light">Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

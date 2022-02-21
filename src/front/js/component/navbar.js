import React from "react";
import { Link } from "react-router-dom";
import sw  from "../../img/logo.png";
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
			  <span className="text-light mx-3">CHARACTERS</span>
			  <span className="text-light mx-3">PLANETS</span>
			  <span className="text-light mx-3">STARSHIPS</span>
		  </div>

          <div className="col-3 d-flex justify-content-center my-auto">
            <Link className="mx-2" to="/signup">
              <button className="btn btn-outline-warning">Sign Up</button>
            </Link>
			<Link className="mx-2" to="/login">
              <button className="btn btn-outline-warning">Log In</button>
            </Link>
          </div>
         
        </div>
      </div>

  );
};

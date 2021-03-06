import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import sw from "../../img/logo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      {!store.token ? (
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
              <div className="vr text-white"></div>
              <Link to="/planets" style={{ textDecoration: "none" }}>
                <span className="text-light mx-3 fw-light">PLANETS</span>
              </Link>
              <div className="vr text-white"></div>
              <Link to="/starships" style={{ textDecoration: "none" }}>
                <span className="text-light mx-3 fw-light">STARSHIPS</span>
              </Link>
            </div>

            <div className="col-3 d-flex justify-content-center my-auto">
              <Link className="mx-2" to="/signup">
                <button className="btn btn-outline-warning fw-light">
                  Sign Up
                </button>
              </Link>
              <Link className="mx-2" to="/login">
                <button className="btn btn-outline-warning fw-light">
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
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
              <div className="vr text-white"></div>
              <Link to="/planets" style={{ textDecoration: "none" }}>
                <span className="text-light mx-3 fw-light">PLANETS</span>
              </Link>
              <div className="vr text-white"></div>
              <Link to="/starships" style={{ textDecoration: "none" }}>
                <span className="text-light mx-3 fw-light">STARSHIPS</span>
              </Link>
              <div className="vr text-white"></div>
              <Link to="/favorites" style={{ textDecoration: "none" }}>
                <span className="text-light mx-3 fw-light">FAVORITES</span>
                <span class="badge rounded-pill bg-danger text-white mb-2 fs-6">{store.favorites.length}</span>
              </Link>
              <div className="vr text-white ms-2"></div>
              <Link to="/starships" style={{ textDecoration: "none" }}>
                <span className="text-light mx-3 fw-light">BLOG</span>
              </Link>
              
            </div>

            <div className="col-3 d-flex justify-content-center my-auto">
              <button
                className="btn btn-outline-warning fw-light"
                onClick={() => actions.logout()}
              >
                Log Out
              </button>
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

{
  /* <div className="col-3 d-flex justify-content-center my-auto">
            <button
              className="btn btn-outline-warning fw-light"
              onClick={() => actions.logout()}
            >
              Log Out
            </button>
          </div> */
}

{
  /* <div className="container-fluid bg-black">
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
          <div className="vr text-white"></div>
          <Link to="/planets" style={{ textDecoration: "none" }}>
            <span className="text-light mx-3 fw-light">PLANETS</span>
          </Link>
          <div className="vr text-white"></div>
          <Link to="/starships" style={{ textDecoration: "none" }}>
            <span className="text-light mx-3 fw-light">STARSHIPS</span>
          </Link>
        </div>

        <div className="col-3 d-flex justify-content-center my-auto">
          <Link className="mx-2" to="/signup">
            <button className="btn btn-outline-warning fw-light">
              Sign Up
            </button>
          </Link>
          <Link className="mx-2" to="/login">
            <button className="btn btn-outline-warning fw-light">Log In</button>
          </Link>
        </div>
      </div>
    </div> */
}

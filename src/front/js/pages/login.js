import React from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
  return (
    <div className="container mt-5">
      <div className="box-login p-5 rounded-3">
        <form className="form d-flex flex-column col-4 bg-black bg-opacity-50 p-4 rounded-3">
          <hr className="border border-1 m-2" />
          <h2 className="text-center text-warning fw-light">SIGN IN</h2>
          <hr className="border border-1 m-2" />
          <div className="form-group">
            <label className="text-light p-2 mt-3 fw-light">EMAIL</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label className="text-light p-2 mt-3 fw-light">PASSWORD</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <Link className="text-center" to="/single">
            <button type="submit" className="btn btn-outline-warning my-4 fw-light">
              Sign In
            </button>
          </Link>
          <div className="text-center">
            <span className="text-warning fw-light">
              <small>Need help signing in?</small>
            </span>
          </div>
          <Link className="text-center mt-5" to="/signup" style={{ textDecoration: "none" }}>
            <button className="btn btn-outline-light btn-sm fw-light">
              Create an Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

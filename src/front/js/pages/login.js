import React from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
  return (
    <div className="container mt-5">
      <div className="box-login p-5 rounded-3">
        <form className="form d-flex flex-column col-4 bg-black bg-opacity-75 p-4">
          <hr className="border border-1" />
          <h2 className="text-center text-warning">Log In</h2>
          <hr className="border border-1" />
          <div className="form-group">
            <label className="text-light p-2 mt-3 h5">Email</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label className="text-light p-2 mt-3 h5">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
         
          <Link className="text-center" to="/single">
            <button type="submit" className="btn btn-outline-warning my-4">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/signup.css";

export const Signup = () => {
  return (
    <div className="container mt-5">
      <div className="box-signup p-5 rounded-3">
        <form className="form d-flex flex-column col-4 bg-black bg-opacity-50 p-4 rounded-3">
          <hr className="border border-1 m-2" />
          <h3 className="text-center text-warning">Create Your Account</h3>
          <hr className="border border-1 m-2" />
          <div className="form-group">
            <label className="text-light p-2 mt-3 h5">Name</label>
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <label className="text-light p-2 mt-3 h5">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
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
              Create Account
            </button>
          </Link>
          <div className="text-center">
            <small className="text-white">
              Already have an account?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}><span className="text-warning text-decoration-underline">Sign In</span></Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

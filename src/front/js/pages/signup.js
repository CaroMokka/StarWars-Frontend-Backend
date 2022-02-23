import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/signup.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState(true);

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.username !== "" &&
      user.name !== "" &&
      user.email !== "" &&
      user.password !== ""
    ) {
      console.log(user);
      actions.setSignup(user); //state user
      setUser({
        username: "",
        name: "",
        email: "",
        password: "",
      });
      setValidation(true);
    } else setValidation(false);
  };

  return (
    <div className="container mt-5">
      <div className="box-signup p-5 rounded-3">
        <form
          className="form d-flex flex-column col-4 bg-black bg-opacity-50 p-4 rounded-3"
          onSubmit={handleSubmit}
        >
          <hr className="border border-1 m-2" />
          <h3 className="text-center text-warning">Create Your Account</h3>
          <hr className="border border-1 m-2" />
          <div className="form-group">
            <label className="text-light p-2 m-0">User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
              name="username"
              onChange={handleChange}
              value={user.username}
            />
             
          </div>
          {!validation && <p className="text-danger text-center m-0">Required</p>}
          <div className="form-group">
            <label className="text-light p-2 m-0">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={user.name}
            />
            
          </div>
          {!validation && <p className="text-danger text-center m-0">Required</p>}
          <div className="form-group">
            <label className="text-light p-2 m-0">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={user.email}
            />
          </div>
          {!validation && <p className="text-danger text-center m-0">Required</p>}
          <div className="form-group">
            <label className="text-light p-2 m-0">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={user.password}
            />
          </div>
          {!validation && <p className="text-danger text-center m-0">Required</p>}

          <button type="submit" className="btn btn-outline-warning my-4">
            Create Account
          </button>

          <div className="text-center">
            <small className="text-white">
              Already have an account?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span className="text-warning text-decoration-underline">
                  Sign In
                </span>
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

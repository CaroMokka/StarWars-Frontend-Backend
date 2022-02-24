import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  console.log("este es tu token" + " " + store.token);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email, password);
    actions.setLogin(email, password);
  };

  if (store.token && store.token != "" && store.token != undefined)
    history.push("/");

  return (
    <div className="container mt-5">
      <p className="text-info text-center bg-dark"><small>Ingresar con 'invitad@' en ambos inputs, para obtener tus favoritos! (validación en desarrollo).</small></p>
      <div className="box-login p-5 rounded-3">
        <form className="form">
          {store.token && store.token != "" && store.token != undefined ? (
            "tu estas logeado con este token " + " " + store.token
          ) : (
            <div className="d-flex flex-column col-4 bg-black bg-opacity-50 p-4 rounded-3">
              <div className="border-bottom border-white">
                <h2 className="text-center text-warning fw-light my-2">
                  SIGN IN
                </h2>
              </div>
              <div className="form-group">
                <label className="text-light p-2 mt-3 fw-light">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="text-light p-2 mt-3 fw-light">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-warning my-4 fw-light"
                onClick={handleClick}
              >
                Sign In
              </button>

              <div className="text-center">
                <span className="text-warning fw-light">
                  <small>Need help signing in?</small>
                </span>
              </div>
              <Link
                className="text-center mt-5"
                to="/signup"
                style={{ textDecoration: "none" }}
              >
                <button className="btn btn-outline-light btn-sm fw-light">
                  Create an Account
                </button>
              </Link>
              
            </div>
          )}
          
        </form>
      </div>
    </div>
  );
};

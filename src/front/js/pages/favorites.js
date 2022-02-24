import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Favorites = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid bg-dark">
        <h2 className="text-center text-warning fw-bold p-4">FAVORITES</h2>
      <div>
        {store.favorites.map((item, index) => {
          return (
            <div key={index} className="text-white">
              <span className="text-warning display-5">{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

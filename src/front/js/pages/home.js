import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
/* components */
import { Carousel } from "../component/carousel";
import { Jumbotron } from "../component/jumbotron";
import { GroupCards } from "../component/group-cards";
import { BannerDown } from "../component/bannerDown";
/* styles */
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.privateMessage();
  }, [store.token]);

  return (
    <div className="container-fluid">
      <Carousel />
      <div className="my-4"></div>
      {!store.token ? (
        <div className="text-white text-center display-4 fw-bold">
          <span className="bg-blackborder-top border-bottom border-3 border-warning my-5">Bienvenid@ a STAR WARS</span>
        </div>
      ) : (
        <div className="text-white text-center display-4 fw-bold">
          <span className="bg-black border-top border-bottom border-3 border-warning my-5">{store.message}</span>
        </div>
      )}

      <div className="my-4"></div>

      <Jumbotron />
      <div className="my-4"></div>
      <GroupCards />
      <div className="my-4"></div>
      <BannerDown />

    {/*   <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div> */}
    </div>
  );
};

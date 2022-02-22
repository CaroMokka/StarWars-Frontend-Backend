import React, { useContext } from "react";
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

  return (
    <div className="container-fluid">
      <Carousel />

      <div className="my-4"></div>

      <Jumbotron />
      <div className="my-4"></div>
      <GroupCards />
      <div className="my-4"></div>
      <BannerDown />

      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
    </div>
  );
};

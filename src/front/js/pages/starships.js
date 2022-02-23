import React from "react";
import { BannerUp } from "../component/bannerUp";
import { Title } from "../component/title";

export const Starships = () => {
  return (
    <div className="container-fluid">
      <BannerUp
        img={
          "https://starwarsblog.starwars.com/wp-content/uploads/2021/12/foodtastic-journeys-to-the-galaxy-far-far-away_TALL-1536x512.jpg"
        }
        name={"STARSHIPS"}
      />
      <Title name={"Starships"}/>
    </div>
  );
};

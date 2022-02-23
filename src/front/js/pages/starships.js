import React, { useContext } from "react";
import { Context } from "../store/appContext";
/* components */
import { BannerUp } from "../component/bannerUp";
import { Title } from "../component/title";
import { Card } from "../component/card";

export const Starships = () => {
  const { store, actions} = useContext(Context);
  return (
    <div className="container-fluid">
      <BannerUp
        img={
          "https://starwarsblog.starwars.com/wp-content/uploads/2021/12/foodtastic-journeys-to-the-galaxy-far-far-away_TALL-1536x512.jpg"
        }
        name={"STARSHIPS"}
      />
      <Title name={"STARSHIPS"}/>
      <div className="container d-flex justify-content-center flex-wrap">
        {store.starships.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              img={`https://starwars-visualguide.com/assets/img/starships/${
                index + 1
              }.jpg`}
              detail={`/detailStarship/${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

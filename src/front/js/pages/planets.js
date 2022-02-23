import React, {useContext} from "react";
import { Context } from "../store/appContext";
/* componets */
import { BannerUp } from "../component/bannerUp";
import { Title } from "../component/title";
import { Card } from "../component/card";

export const Planets = () => {
    const { store, actions } = useContext(Context);
  return (
    <div className="container-fluid">
      <BannerUp
        img={
          "https://starwarsblog.starwars.com/wp-content/uploads/2021/12/star-wars-the-high-republic-trail-of-shadows-3_TALL-1536x512.jpg"
        }
        name={"PLANETS"}
      />
      <Title name={"Planets"}/>
      <div className="container d-flex justify-content-center flex-wrap">
        {store.planets.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              img={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
              detail={`/detailPlanet/${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

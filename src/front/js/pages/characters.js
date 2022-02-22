import React, { useContext } from "react";
import { Context } from "../store/appContext";

/* components */
import { BannerUp } from "../component/bannerUp";
import { Card } from "../component/card";

export const Characters = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <BannerUp />
      <hr className="my-2"></hr>
      <div className="row">
        {store.characters.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              img={`https://starwars-visualguide.com/assets/img/characters/${
                index + 1
              }.jpg`}
              detail={`/detailCharacter/${index + 1}`}
            
            />
            
          );
        })}
      </div>
    </div>
  );
};

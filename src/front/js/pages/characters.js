import React, { useContext } from "react";
import { Context } from "../store/appContext";

/* components */
import { BannerUp } from "../component/bannerUp";
import { Card } from "../component/card";
import { Title } from "../component/title";

export const Characters = () => {
  const { store, actions } = useContext(Context);


  //DEclarar la function de AddFavs
  /* const handleFavs = () => {
    actions.addFav(item.name);
  } */

  return (
    <div className="container-fluid">
      <BannerUp
        img={
          "https://starwarsblog.starwars.com/wp-content/uploads/2021/08/jedi-name-scramble-COLLAGE_TALL-RATIOS-BLASTER-DOOR-1536x512.jpg"
        }
        name={"CHARACTERS"}
      />
      <Title name={"CHARACTERS"}/>
      <div className="container d-flex justify-content-center flex-wrap">
        {store.characters.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              img={`https://starwars-visualguide.com/assets/img/characters/${
                index + 1
              }.jpg`}
              detail={`/detailCharacter/${index + 1}`}
              btn={ () => {actions.addFav(item.name);} }
             
         
    
            />
          );
        })}
      </div>
    </div>
  );
};

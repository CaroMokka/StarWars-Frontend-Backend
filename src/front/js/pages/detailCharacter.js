import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
/* components */
import { CardDetail } from "../component/cardDetail";
import "../../styles/detailCharacter.css";

export const DetailCharacter = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getDetailCharacter(id);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row bg-dark">
        {" "}
        <div className="col-6">
          <CardDetail
            name={store.detailcharacter.name}
            img={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            date={"Birthdate:" + " " +  store.detailcharacter.birth_year}
            height={"Height:" + " " + store.detailcharacter.height}
            hair_color={"Hair:" + " " +  store.detailcharacter.hair_color}
            eye_color={"Eyes:" + " " + store.detailcharacter.eye_color}
            skin_color={"Skin:" + " " + store.detailcharacter.skin_color}
          />
        </div>
      </div>
    </div>
  );
};

/* {`mode${modeNumber}`} */
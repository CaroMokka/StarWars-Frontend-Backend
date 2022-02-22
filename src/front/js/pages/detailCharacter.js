import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
/* components */
import { CardDetail } from "../component/cardDetail";

export const DetailCharacter = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getDetailCharacter(id);
  }, []);

  return (
    <div className="container">
      <CardDetail
        name={store.detailcharacter.name}
        img={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        date={store.detailcharacter.birth_year}
        height={store.detailcharacter.height}
        hair_color={store.detailcharacter.hair_color}
        eye_color={store.detailcharacter.eye_color}
        skin_color={store.detailcharacter.skin_color}
      />
    </div>
  );
};

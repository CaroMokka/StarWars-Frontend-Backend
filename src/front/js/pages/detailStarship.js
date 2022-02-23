import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
/* componets */
import { CardDetail } from "../component/cardDetail";

export const DetailStarship = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.getDetailStarship(id);
    },[]);

    return (
        <div className="container-fluid">
        <div className="row bg-dark">
          {" "}
          <div className="col-6">
            <CardDetail
              name={store.detailstarship.name}
              img={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
              model={"Model:" + " " +  store.detailstarship.model}
              manufacturer={"Manufacturer:" + " " + store.detailstarship.manufacturer}
              passengers={"Passengers:" + " " +  store.detailstarship.passengers}
              classe={"Class:" + " " + store.detailstarship.starship_class}
             
            />
          </div>
        </div>
      </div>
    )
}
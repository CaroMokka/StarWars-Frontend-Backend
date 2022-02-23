import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
/* componets */
import { CardDetail } from "../component/cardDetail";


export const DetailPlanet = () => {
    const { store, actions} = useContext(Context);
    const { id } = useParams();


    useEffect( () => {
        actions.getDetailPlanet(id);
    }, [] );

    return (
        <div className="container-fluid">
      <div className="row bg-dark">
        {" "}
        <div className="col-6">
          <CardDetail
            name={store.detailplanet.name}
            img={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            diameter={"Diameter:" + " " + store.detailplanet.diameter}
            population={"Population:" + " " + store.detailplanet.population}
            climate={"Climate:" + " " + store.detailplanet.climate}
            terrain={"Terrain:" + " " + store.detailplanet.terrain}
         
          />
        </div>
      </div>
    </div>
    )
}
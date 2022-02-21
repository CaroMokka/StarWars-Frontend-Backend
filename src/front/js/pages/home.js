import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Carousel } from "../component/carousel";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5">

			<Carousel/>

			<hr className="border border-1"/>
			
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
		
		</div>
	);
};

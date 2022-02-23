import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";


/* components */
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
/* pages */
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import { Characters } from "./pages/characters";
import { Planets } from "./pages/planets";
import { Starships } from "./pages/starships";
import { DetailCharacter } from "./pages/detailCharacter";
import { DetailPlanet } from "./pages/detailPlanet";
import { DetailStarship } from "./pages/detailStarship";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/characters">
							<Characters />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/starships">
							<Starships />
						</Route>
						<Route exact path="/detailCharacter/:id">
							<DetailCharacter />
						</Route>
						<Route exact path="/detailPlanet/:id">
							<DetailPlanet />
						</Route>
						<Route exact path="/detailStarship/:id">
							<DetailStarship />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

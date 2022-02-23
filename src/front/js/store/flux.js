const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			characters: [],
			detailcharacter:{},
			planets: [],
			detailplanet: {},
			starships: [],
			detailstarship: {},
			favorites:[]
		},
		actions: {
			

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			//---------------------------> GET Characters
			getCharacters: async () => {
				await fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(
						resultado => {
							console.log(resultado.results);
							setStore({ characters: resultado.results });
						}
						/*console.log(resultado)*/
					)
					.catch(error => console.log("error", error));
			},
			//---------------------------> GET Detail Character
			getDetailCharacter: async (id) => {
				await fetch(`https://www.swapi.tech/api/people/${id}`)
				.then(response => response.json())
				.then(resultado => {
					setStore({ detailcharacter: resultado.result.properties });
					console.log(resultado);
				})
				.catch(error => console.log("error", error));
			},
			//---------------------------> GET Planets
			getPlanets: async () => {
				await fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(
						resultado => {
							console.log(resultado.results);
							setStore({ planets: resultado.results });
						}
						/*console.log(resultado)*/
					)
					.catch(error => console.log("error", error));
			},
			//---------------------------> GET Detail Planet
			getDetailPlanet: async (id) => {
				await fetch(`https://www.swapi.tech/api/planets/${id}`)
				.then(response => response.json())
				.then(resultado => {
					setStore({ detailplanet: resultado.result.properties });
					console.log(resultado);
				})
				.catch(error => console.log("error", error));
			},
			//---------------------------> GET Starships
			getStarships: async () => {
				await fetch("https://www.swapi.tech/api/starships")
					.then(response => response.json())
					.then(
						resultado => {
							console.log(resultado.results);
							setStore({ starships: resultado.results });
						}
						/*console.log(resultado)*/
					)
					.catch(error => console.log("error", error));
			},
			//---------------------------> GET Detail Planet
			getDetailStarship: async (id) => {
				await fetch(`https://www.swapi.tech/api/starships/${id}`)
				.then(response => response.json())
				.then(resultado => {
					setStore({ detailstarship: resultado.result.properties });
					console.log(resultado);
				})
				.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;

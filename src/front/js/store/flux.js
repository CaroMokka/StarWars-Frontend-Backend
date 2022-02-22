const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			characters: [],
			detailcharacter:{}
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
			}
		}
	};
};

export default getState;

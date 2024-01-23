const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes : [],
			planetas : [],
			personaje : [],
			planeta : [],
			favoritos : []
		},
		actions: {
			// Use getActions to call a function within a fuction
			obtenerPersonajes : async() => {
				try {
					const response = await fetch("https://swapi.dev/api/people")
					const data = await response.json()
					console.log(data)
					setStore({personajes : data.results}) 

				} catch (error) {
					console.log(error)
				}
			},
			obtenerPlanetas : async() => {
				try {
					const response = await fetch("https://swapi.dev/api/planets")
					const data = await response.json()
					console.log(data)
					setStore({planetas : data.results}) 

				} catch (error) {
					console.log(error)
				}
			},
			masInformacionPersonaje : async(id) => {
				try {
					const response = await fetch("https://swapi.dev/api/people/"+id)
					const data = await response.json()
					console.log(data)
					setStore({personaje : data}) 

				} catch (error) {
					console.log(error)
				}
			},
			masInformacionPlaneta : async(id) => {
				try {
					const response = await fetch("https://swapi.dev/api/planets/"+ id)
					const data = await response.json()
					console.log(data)
					setStore({planeta : data}) 

				} catch (error) {
					console.log(error)
				}
			},
			favoritos : (nombre) => {
				const store = getStore()
				if (store.favoritos.includes(nombre)){
					let aux = []
					aux = store.favoritos.filter((elem) => elem != nombre)
					setStore({favoritos : aux})
				} else {
					setStore({favoritos : [...store.favoritos,nombre]})
				} 
			}
		}
	};
};

export default getState;

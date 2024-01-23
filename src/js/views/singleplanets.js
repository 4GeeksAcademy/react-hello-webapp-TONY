import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(store.planeta)
	useEffect(() => {
		actions.masInformacionPlaneta(params.theid)
	}, [])
	return (
		<div className="container">
			{/* {store.personaje.name}
				<p className="card-text">height : {store.personaje.height}</p> */}

				<div className="card" style={{width:"18rem", flex : "none", margin : "10px"}}>
                    {params.theid == 1?
                    <img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="card-img-top" alt={store.planeta.name} />:
                    <img src={"https://starwars-visualguide.com/assets/img/planets/"+ params.theid +".jpg"}className="card-img-top" alt={store.planeta.name} />
                }
                        <div className="card-body">
                            <h5 className="card-title">{store.planeta.name}</h5>
                            <p className="card-text">Climate : {store.planeta.climate}</p>
                            <p className="card-text">Population : {store.planeta.population}</p>
							<p className="card-text">Diameter : {store.planeta.diameter}</p>
							<p className="card-text">Gravity : {store.planeta.gravity}</p>
							<p className="card-text">Orbital period : {store.planeta.orbital_period}</p>
							<p className="card-text">Rotation period : {store.planeta.rotation_period}</p>
							<p className="card-text">Terrain : {store.planeta.terrain}</p>
							<p className="card-text">Surface water : {store.planeta.surface_water}</p>
                        </div>
                    </div>
					
		</div>
	);
};

SinglePlanets.propTypes = {
	match: PropTypes.object
};

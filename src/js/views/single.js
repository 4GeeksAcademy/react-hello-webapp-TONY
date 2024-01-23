import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(store.personaje)
	useEffect(() => {
		actions.masInformacionPersonaje(params.theid)
	}, [])
	return (
		<div className="container">
			{/* {store.personaje.name}
				<p className="card-text">height : {store.personaje.height}</p> */}

				<div className="card" style={{width:"18rem", flex : "none", margin : "10px"}}>
				<img src={"https://starwars-visualguide.com/assets/img/characters/"+ params.theid +".jpg"}className="card-img-top" alt={store.personaje.name} />
                        <div className="card-body">
                            <h5 className="card-title">{store.personaje.name}</h5>
                            <p className="card-text">Height : {store.personaje.height}</p>
                            <p className="card-text">Mass : {store.personaje.mass}</p>
							<p className="card-text">Hair color : {store.personaje.hair_color}</p>
							<p className="card-text">Eyes color : {store.personaje.eyes_color}</p>
							<p className="card-text">Gender : {store.personaje.gender}</p>
							<p className="card-text">Skin color : {store.personaje.skin_color}</p>
                        </div>
                    </div>
					
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};

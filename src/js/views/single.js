import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params)
	useEffect(() => {
		actions.masInformacionPersonaje(params.theid)
	}, [])
	return (
		<div className="container">
			{store.personaje.name}
				<p className="card-text">height : {store.personaje.height}</p>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};

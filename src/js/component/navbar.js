import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store} = useContext(Context)
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<i class="fa-brands fa-space-awesome"></i>
			<div>
				<div className="nav-item dropdown">
					<a className="nav-link dropdown-toggle"
						href="#" role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false" >
						Favoritos</a>
					<ul className="dropdown-menu" >
						{store.favoritos.map((item,id) => (
							<li key={id}>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

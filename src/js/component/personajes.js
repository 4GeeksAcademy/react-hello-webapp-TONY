import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Personajes = () => {
    const { store, actions } = useContext(Context) // 1, 3 y 7 para llamar funciones de flux o store
    useEffect(() => {
        actions.obtenerPersonajes()
    }, [])

    return (
        <>
            <h1>Personajes</h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.personajes.map((item,id)=>(

                    <div key={id} className="card" style={{width:"18rem", flex : "none", margin : "10px"}}>
                        <img src={"https://starwars-visualguide.com/assets/img/characters/"+ (id + 1) +".jpg"}className="card-img-top" alt={item.name} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Height : {item.height}</p>
                            <p className="card-text">Mass : {item.mass}</p>
                            <Link to={"/single/"+(id + 1)} className="btn btn-outline-primary float-start">Learn more</Link>
                            <div className="btn btn-outline-warning float-end" onClick={() => actions.favoritos(item.name)}> <i className="fa fa-heart"></i>
                            </div>
                        </div>
                    </div>

                    ))}
                </div>
            </div>
        </>
    );
};
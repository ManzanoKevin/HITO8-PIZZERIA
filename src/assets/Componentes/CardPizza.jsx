import React from "react";

const CardPizza = ({ pizza }) => {
    return (
        <article className="cardContainer">
            <img 
                src={pizza.img} 
                alt={pizza.name}
                className="imagenCard" 
            />
            <div className="texto">
                <h2 className="nombrePizza">{pizza.name}</h2>
                <hr />
                <div className="ingredientes">
                    <p>Ingredientes:</p>
                    <ul className="card-tet list-inline">
                        {pizza.ingredients.map((ingredient, index) => (
                            <li key={index} className="list-group-item"> 🍕{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <hr />
                <p>Precio: ${pizza.price.toLocaleString('es-CL')}</p>
            </div>
            <div className="botones">
                <button type="button" className="btn btn-outline-dark fs-6">Ver más 👀</button>
                <button type="button" className="btn btn-dark fs-6">Añadir 🛒</button>
            </div>
        </article>
    ); 
};

export default CardPizza;
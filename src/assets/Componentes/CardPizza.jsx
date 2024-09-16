import react from "react";

function CardPizza ({imagen, nombre, ingredientes, precio }){
    return (
        <article className="cardContainer">
            <img className="imagenCard" src={imagen}></img>
            <div className="texto">
                <h2 className="nombrePizza">{nombre}</h2>
                <hr />
                <div className="ingredientes">
                    <p>Ingredientes:</p>
                    <p>🍕  {ingredientes}</p>
                </div>
                <hr />
                <p>Precio: ${precio.toLocaleString('es-CL')}</p>
            </div>
            <div className="botones">
            <button type="button" className="btn btn-outline-dark fs-6">Ver más 👀</button>
            <button type="button" className="btn btn-dark fs-6">Añadir 🛒</button>
            </div>
        </article>
    ) 
};

export default CardPizza;
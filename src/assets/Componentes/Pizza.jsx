import React, { useState, useEffect } from "react";

const Pizza = () => {
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/pizzas/p001");
                const data = await response.json();
                setPizza(data);
            } catch (error) {
                console.error("Error fetching pizza:", error);
            }
        };
        fetchPizza();
    }, []);

    if (!pizza) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detallepizza">
            <img src={pizza.img} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>{pizza.desc}</p>
            <p><strong>Precio:</strong> ${pizza.price}</p>
            <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
            <button className="btn btn-primary">Añadir al carrito</button>
        </div>
    );
};

export default Pizza;

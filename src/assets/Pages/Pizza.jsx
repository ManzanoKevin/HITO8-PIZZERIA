import React, { useState, useEffect, useContext } from "react";
import { CartContext } from '../Context/CartContext';
import { useParams } from 'react-router-dom';

const Pizza = () => {
    
    const [pizza, setPizza] = useState(null);
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/pizzas/${id}");
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

    const handleAddToCart = () => {
        const pizzaToAdd = {
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
            quantity: 1,
            image: pizza.img
        };
        addToCart(pizzaToAdd);
    };

        return (
            <div className="detallepizza">
                <img src={pizza.img} alt={pizza.name} />
                <h2>{pizza.name}</h2>
                <p>{pizza.desc}</p>
                <p><strong>Precio:</strong> ${pizza.price}</p>
                <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
                <button className="btn btn-primary" onClick={handleAddToCart}>Añadir al carrito</button>
            </div>
    );
};

const PizzaCart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="cart-container">
            <h3>Carrito de Pizzas</h3>
            {cart.length > 0 ? (
                <ul>
                    {cart.map((item) => (
                    <li key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div>
                        <p>{item.name}</p>
                        <p>Cantidad: {item.quantity}</p>
                    </div>
                    <p>Precio: ${item.price}</p>
                    </li>
            ))}
                </ul>
            ) : (
                <p>No has añadido pizzas al carrito todavía.</p>
            )}
        </div>
    );
};

export default Pizza;

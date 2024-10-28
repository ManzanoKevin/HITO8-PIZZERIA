import React, { useState, useEffect, useContext } from "react";
import Header from '../Componentes/Header'; 
import CardPizza from '../Componentes/CardPizza';
import { CartContext } from '../Context/CartContext';

const Home = () => {

    const [pizza, setPizza] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/pizzas");
                const data = await response.json();
                setPizza(data);
            } catch (error) {
                console.error("Error fetching pizza:", error);
            }
        };
        fetchPizza();
    }, []);

    return (
        <div className='container-fluid'>
            <Header />
            <div className='row justify-content-center' >
                {pizza.map((pizza) => (
                    <div key={pizza.id} className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex">
                        <CardPizza pizza={pizza} addToCart={addToCart} />
                    </div>
                ))}
            </div>        
        </div>
    );
}

export default Home;

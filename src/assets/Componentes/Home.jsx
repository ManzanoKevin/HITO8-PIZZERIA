import React, { useState, useEffect } from "react";
import Header from './Header'; 
import CardPizza from './CardPizza';

const Home = () => {

    const [pizza, setPizza] = useState([]);

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
                        <CardPizza pizza={pizza} />
                    </div>
                ))}
            </div>        
        </div>
    );
}

export default Home;

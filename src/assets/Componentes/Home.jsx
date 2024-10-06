import React from 'react';
import Header from './Header'; 
import CardPizza from './CardPizza';
import { pizzas } from './pizzas';

const Home = () => {
    return (
        <div className='container-fluid'>
            <Header />
            <div className='row justify-content-center' >
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex">
                        <CardPizza pizza={pizza} />
                    </div>
                ))}
            </div>        
        </div>
    );
}

export default Home;

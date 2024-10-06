import React, { useState, useEffect } from "react";
import pizzas from './pizzas';

const Cart = () => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const total = carrito
            .map(item => item.count * item.price)
            .reduce((suma, iteracion) => suma + iteracion, 0); 
        setTotal(total);
    }, [carrito]);

    const agregarPizza = (nuevaPizza) => {
        setCarrito(prevCarrito => {
            const existe = prevCarrito.find(pizza => pizza.id === nuevaPizza.id);
            if (existe) {
                return prevCarrito.map(pizza =>
                    pizza.id === nuevaPizza.id
                        ? { ...pizza, count: pizza.count + nuevaPizza.count }
                        : pizza
                );
            } else {
                return [...prevCarrito, nuevaPizza];
            }
        });
    };

    const restarPizza = (pizzaId) => {
        setCarrito(prevCarrito => {
            const pizzaExistente = prevCarrito.find(pizza => pizza.id === pizzaId);
            if (pizzaExistente && pizzaExistente.count > 1) {
                return prevCarrito.map(pizza =>
                    pizza.id === pizzaId
                        ? { ...pizza, count: pizza.count - 1 }
                        : pizza
                );
            } else {
                return prevCarrito.filter(pizza => pizza.id !== pizzaId);
            }
        });
    };

    const eliminarPizza = (pizzaId) => {
        setCarrito(prevCarrito => prevCarrito.filter(pizza => pizza.id !== pizzaId));
    };

    return (
        <>
            <div className="p-4">
                <h2>Carrito de Compras</h2>
            </div>
            <div className="p-4">
                <h4>Disponibles para agregar:</h4>
                <div className="row">
                    {pizzas.map(pizza => (
                        <div key={pizza.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <img
                                    src={pizza.img}
                                    alt={pizza.name}
                                    className="card-img-top rounded mx-auto d-block"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{pizza.name}</h5>
                                    <p className="card-text">Precio: ${pizza.price.toLocaleString('es-CL')}</p>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => agregarPizza({ ...pizza, count: 1 })}
                                    >
                                        Añadir Pizza
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-4">
                <h4 className="pt-2">Pizzas a llevar 🛒:</h4>
                <ul>
                    {carrito.map(item => (
                        <li key={item.id}>
                            <img
                                src={item.img}
                                alt={item.name}
                                style={{ width: '50px', height: '50px', marginRight: '10px' }}
                            />
                            {item.name} - {item.count} x ${item.price.toLocaleString('es-CL')} = ${(item.count * item.price).toLocaleString('es-CL')}
                            <button
                                className="btn btn-secondary btn-sm mx-2"
                                onClick={() => agregarPizza({ ...item, count: 1 })}
                            >
                                +
                            </button>
                            <button
                                className="btn btn-secondary btn-sm mx-2"
                                onClick={() => restarPizza(item.id)}
                            >
                                -
                            </button>
                            <button
                                className="btn btn-danger btn-sm mx-2"
                                onClick={() => eliminarPizza(item.id)}
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="pb-4">
                    <h5>Monto Total: ${total.toLocaleString('es-CL')}</h5>
                    <button className="btn btn-primary">Comprar</button>
                </div>
            </div>
        </>
    );
};

export default Cart;

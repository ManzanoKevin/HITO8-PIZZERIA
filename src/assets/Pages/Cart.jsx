import React, { useContext, useMemo } from "react";
import { CartContext } from '../Context/CartContext';
import { UserContext } from '../Context/UserContext';

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
    const { token } = useContext(UserContext);
    const total = useMemo(() => {

        return cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);
    }, [cart]);

    return (
        <div className="cart-container row">
            {cart.length > 0 ? (
                cart.map(({ id, img, name, price, quantity }, index) => (
                    <div
                        key={id}
                        className={`col-lg-4 col-md-6 ${cart.length === 1 ? 'col-12' : ''} mb-4 d-flex ${index < 3 ? 'pt-3' : ''}`}
                    >
                        <div className="cart-item card w-100">
                            <img src={img} alt={name} className="cart-item-img" style={{ width: '100%', height: 'auto', maxHeight: '400px' }} />
                            <h3>{name}</h3>
                            <p>Precio: ${price}</p>
                            <p>Cantidad: {quantity}</p>
                            <button className="btn btn-outline-success" onClick={() => increaseQuantity(id)}>+</button>
                            <button className="btn btn-outline-danger" onClick={() => decreaseQuantity(id)}>-</button>
                            <button className="btn btn-outline-danger" onClick={() => removeFromCart(id)}>Eliminar</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No tienes pizzas en el carrito aún.</p>
            )}
            <p><strong>Total:</strong> ${total.toLocaleString('es-CL')}</p>
            <button className="btn btn-primary" disabled={!token}>Pagar</button>
        </div>
    );    
};

export default Cart;
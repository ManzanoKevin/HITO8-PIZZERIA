import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { UserContext } from '../Context/UserContext';

const Navbar = () => {
    const { calculateTotal } = useContext(CartContext);
    const { token, logout } = useContext(UserContext);

    const total = calculateTotal();


return (
    <nav id="navbar" className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">Pizzería Mamma Mia!</a>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active text-white border border-6 border-light rounded mx-2" aria-current="page" to='/'>
                🍕Home
            </Link>
            </li>
            {/* {FUNCIÓN TERNARIA} */}
            {token ? (
            <>
                <li className="nav-item mx-2">
                <Link className="nav-link text-white border border-6 border-light rounded" to='/profile'>🔓 Profile</Link>
                </li>
                <li className="nav-item mx-2">
                <button className="nav-link text-white border border-6 border-light rounded btn" onClick={logout}>🔒 Logout</button>
                </li>
            </>
            ) : (
            <>
                <li className="nav-item mx-2">
                <Link className="nav-link text-white border border-6 border-light rounded" to='/login'>
                    🔐 Login
                </Link>
                </li>
                <li className="nav-item mx-2">
                <Link className="nav-link text-white border border-6 border-light rounded" to='register'>
                    🔐 Register
                </Link>
                </li>
                <li className="nav-item mx-2">
                <Link className="nav-link text-white border border-6 border-light rounded" to='/profile'>
                    👩‍💻 Profile
                </Link>
                </li>
            </>
            )}
        </ul>
            <Link to='/cart' className="navbar-text text-info" style={{ textDecoration: 'none' }}>🛒 Total: ${total.toLocaleString('es-CL')}</Link>
        </div>
    </div>
    </nav>
);
}

export default Navbar;


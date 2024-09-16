import React from "react";

function Navbar() {
const total = 25000;
const token = false;

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
            <a className="nav-link active text-white border border-6 border-light rounded" aria-current="page" href="#">
                🍕Home
            </a>
            </li>

            {/* {FUNCIÓN TERNARIA} */}
            {token ? (
            <>
                <li className="nav-item">
                <a className="nav-link text-white border border-6 border-light rounded" href="#">
                    🔓 Profile
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white border border-6 border-light rounded" href="#">
                    🔒 Logout
                </a>
                </li>
            </>
            ) : (
            <>
                <li className="nav-item">
                <a className="nav-link text-white border border-6 border-light rounded" href="#">
                    🔐 Login
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white border border-6 border-light rounded" href="#">
                    🔐 Register
                </a>
                </li>
            </>
            )}
        </ul>
        <span className="navbar-text text-info">
            🛒 Total: ${total.toLocaleString('es-CL')}
        </span>
        </div>
    </div>
    </nav>
);
}

export default Navbar;


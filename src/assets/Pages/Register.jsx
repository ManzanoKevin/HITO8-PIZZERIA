import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const { register } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmacionContraseña, setConfirmacionContraseña] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (contraseña !== confirmacionContraseña) {
            setError('Las contraseñas no coinciden');
            return;
        }
        try {
            await register(email, contraseña);
            setError('');
            navigate('/profile');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='Register'> 
            <form className="formulario" onSubmit={handleSubmit}>
                {error ? <p className='alert'>{error}</p> : null}
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="contraseña"
                        className="form-control"
                        onChange={(e) => setContraseña(e.target.value)}
                        value={contraseña}
                    />
                </div>
                <div className="form-group">
                    <label>Confirmación Contraseña</label>
                    <input
                        type="password"
                        name="confirmacionContraseña"
                        className="form-control"
                        onChange={(e) => setConfirmacionContraseña(e.target.value)}
                        value={confirmacionContraseña}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
            <hr />
        </div>
    );
};

export default Register;

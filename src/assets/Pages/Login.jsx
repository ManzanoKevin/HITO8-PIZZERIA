import { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { login } = useContext(UserContext);
    //Estados del formulario
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    
    //Estado para los errores
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    //Función antes de enviar el formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, contraseña);
            setError('');
            navigate('/profile');
        } catch (err) {
            setError(err.message);
        };
    };

    // Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
    return (
        <div className='Login'> 
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
                        name="password"     
                        className="form-control"
                        onChange={(e) => setContraseña(e.target.value)}
                        value={contraseña}
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

export default Login;

import { useState } from 'react';

const Login = () => {

    //Estados del formulario
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    
    //Estado para los erroresS
    const [error, setError] = useState(false);
    
    //Función antes de enviar el formulario
    const validarDatos = (e) => {
    e.preventDefault();
    //Validación;
    if (!email.trim() || !contraseña.trim()) {
    setError(true);
    return;
    }

    if (!email === '' || !email.includes('@')) {
        alert('Campo email está vacío')
        return;
    }

    if (contraseña.length < 6) {
        alert('La contraseña debe tener a menos 6 caracteres')
        return;
    }

        alert('Datos ingresados de manera correcta!')
    
    // Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
    setError(false);
    setEmail('');
    setContraseña('');
    
    setError(false);
    };
    return (
    <div className='Login'> 
    <form className="formulario" onSubmit={validarDatos}>
    {error ? <p className='alert' >Todos los campos son obligatorios</p> : null}
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
    
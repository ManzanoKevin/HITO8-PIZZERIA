import { useState } from 'react';
const Register = () => {

//Estados del formulario
const [email, setEmail] = useState('');
const [contraseña, setContraseña] = useState('');
const [confirmacionContraseña, setConfirmacionContraseña] = useState('');

//Estado para los errores
const [error, setError] = useState(false);

//para que se puedan verificar los caracteres dentro de un label se puede usar dentro de la function
// el !contraseña.lenght > 6 por ejemplo y de esa manera se crea una condición

//Función antes de enviar el formulario
const validarDatos = (e) => {
e.preventDefault();
//Validación;
if (!email.trim() || !contraseña.trim() ||
!confirmacionContraseña.trim()) {
setError(true);
return;
}

if (!email === '' || !email.includes('@')) {
    alert('Campo de email está vacío')
    return;
}

if (contraseña.length < 6) {
    alert('Tu contraseña debe tener al menos 6 caracteres')
    return;
}

if (confirmacionContraseña !== contraseña) {
    alert('Ambas contraseñas deben ser iguales')
    return;
}

alert('Registro ingresado de manera exitosa!')

// Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
setError(false);
setEmail('');
setContraseña('');
setConfirmacionContraseña('');

setError(false);
};
return (
<div className='Register'> 
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

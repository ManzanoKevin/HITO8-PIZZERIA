import './App.css';
import Navbar from './assets/Componentes/Navbar';
// import Home from './assets/Componentes/Home';
import Cart from './assets/Componentes/Cart';
import Footer from './assets/Componentes/Footer';
// import Register from './assets/Componentes/Register';
// import Login from './assets/Componentes/Login';

// Comentar para visualizar otro contenido
const App = () => {
  return (
    <div className='App'>
      <Navbar />
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      <Cart />
      <Footer />
    </div>
  );
}

export default App;

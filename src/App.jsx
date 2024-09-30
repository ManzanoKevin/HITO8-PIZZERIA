import './App.css';
import Navbar from './assets/Componentes/Navbar';
import Home from './assets/Componentes/Home';
import Footer from './assets/Componentes/Footer';
import Register from './assets/Componentes/Register';
import Login from './assets/Componentes/Login';


function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <Register /> */}
      <Login />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;

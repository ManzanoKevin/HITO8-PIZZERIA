import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './assets/Componentes/Navbar';
import Home from './assets/Pages/Home';
import Cart from './assets/Pages/Cart';
import Pizza from './assets/Pages/Pizza';
import Footer from './assets/Componentes/Footer';
import Register from './assets/Pages/Register';
import Login from './assets/Pages/Login';
import Profile from './assets/Pages/Profile';
import NotFound from './assets/Pages/NotFound';
import { CartProvider } from './assets/Context/CartContext';
import { UserProvider, useUser } from './assets/Context/UserContext';

function App () {
  return (
      <div className='App'>
        < UserProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<ProtectedRoute isAuth={false} redirectPath="/" element={<Register />} />} />
              <Route path="/login" element={<ProtectedRoute isAuth={false} redirectPath="/" element={<Login />} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/profile" element={<ProtectedRoute isAuth={true} redirectPath="/login" element={<Profile />} />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
            <Footer />
          </CartProvider>
        </UserProvider>
      </div>
  );
}

function ProtectedRoute({ element, isAuth, redirectPath }) {
  const { token } = useUser();
  const isAuthenticated = isAuth ? token : !token;
  
  return isAuthenticated ? element : <Navigate to={redirectPath} />;
}

export default App;

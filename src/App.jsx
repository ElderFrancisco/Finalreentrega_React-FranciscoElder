import Rutas from '../Routes';
import './App.css';
import NavBar from './components/Navbar';
import CartProvider from './context/CartContext';

function App() {
  return (
    <div>
      <CartProvider>
        <NavBar />

        <Rutas />
      </CartProvider>
    </div>
  );
}

export default App;

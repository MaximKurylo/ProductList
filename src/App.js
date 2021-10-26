import React from 'react';
import { CartProvider } from 'react-use-cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import Home from './Home';


function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>

    </>
  );
}

export default App;

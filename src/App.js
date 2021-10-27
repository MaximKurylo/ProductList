import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import Home from './Home';




function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Route path='/store' component={Home} />
        <Route path='cart' component={Cart}/>
        <Cart/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

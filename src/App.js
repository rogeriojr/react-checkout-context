// App.js
import React from 'react';
import { CartProvider } from './CartContext';
import Product from './Product';
import Cart from './Cart';
import './index';

const App = () => {
  return (
    <CartProvider>
      <div className="app-container">
        <h1 className="app-title">Loja Online</h1>
        <div className="product-list">
          <Product id={1} name="Produto 1" price={19.99} />
          <Product id={2} name="Produto 2" price={29.99} />
          <Product id={3} name="Produto 3" price={39.99} />
          <Product id={4} name="Produto 4" price={39.99} />
        </div>
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;

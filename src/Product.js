// Product.js
import React from 'react';
import { useCart } from './CartContext';
import './index.css';

const defaultProductImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJyKHDp2tY0GLbjzMnNzO6i-xHDwcbEEirC8BbUk36dI40Ux9TLgvFjabFtcscIzKVh0&usqp=CAU';

const Product = ({ id, name, price }) => {
  const { addItemToCart } = useCart();

  return (
    <div className="product-card">
      <img src={defaultProductImage} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">R${price.toFixed(2)}</p>
      <button onClick={() => addItemToCart({ id, name, price, quantity: 1 })} className="add-to-cart-button">
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default Product;

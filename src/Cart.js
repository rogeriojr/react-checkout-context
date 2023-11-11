import React, { useState } from 'react';
import { useCart } from './CartContext';
import './index.css';

const Cart = () => {
  const { cartItems, removeItemFromCart, updateQuantity, clearCart } = useCart();
  const [deliveryOption, setDeliveryOption] = useState('pickup');

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateDeliveryCost = () => {
    // Calcular o custo de entrega
    return deliveryOption === 'delivery' ? 5.0 : 0.0;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateDeliveryCost();
  };

  return (
    <div className="cart-container">
      <h2>Meu Carrinho</h2>
      <ul className="cart-items-list">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <span className="item-name">{item.name}</span>
            <span className="item-price">R${item.price.toFixed(2)}</span>
            <div className="quantity-buttons">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span className="item-quantity">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <button onClick={() => removeItemFromCart(item.id)} className="remove-button">
              Remover
            </button>
          </li>
        ))}
      </ul>

      <div className="delivery-options">
        <div
          className={`delivery-option ${deliveryOption === 'pickup' ? 'selected' : ''}`}
          onClick={() => setDeliveryOption('pickup')}
        >
          Retirar na Loja
        </div>
        <div
          className={`delivery-option ${deliveryOption === 'delivery' ? 'selected' : ''}`}
          onClick={() => setDeliveryOption('delivery')}
        >
          Receber em Casa (+ R$5.00)
        </div>
      </div>

      <p>Subtotal: R${calculateSubtotal().toFixed(2)}</p>
      <p>Entrega: R${calculateDeliveryCost().toFixed(2)}</p>
      <p>Total: R${calculateTotal().toFixed(2)}</p>

      <button onClick={clearCart} className="clear-cart-button">
        Limpar Carrinho
      </button>
    </div>
  );
};

export default Cart;

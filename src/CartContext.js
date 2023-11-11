import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return addItemToCart(state, action.payload);
    case 'REMOVE_ITEM':
      return removeItemFromCart(state, action.payload);
    case 'UPDATE_QUANTITY':
      return updateQuantity(state, action.payload);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

const addItemToCart = (cartItems, newItem) => {
  const existingItemIndex = cartItems.findIndex(item => item.id === newItem.id);

  if (existingItemIndex !== -1) {
    // Se o item já existir, atualize sua quantidade
    const updatedCartItems = [...cartItems];
    updatedCartItems[existingItemIndex].quantity += newItem.quantity;
    return updatedCartItems;
  } else {
    // Se o item não existir, adicione-o ao carrinho
    return [...cartItems, newItem];
  }
};

const removeItemFromCart = (cartItems, itemId) => {
  const updatedCartItems = cartItems.filter(item => item.id !== itemId);
  return updatedCartItems;
};

const updateQuantity = (cartItems, { itemId, newQuantity }) => {
  const updatedCartItems = cartItems.map(item => {
    if (item.id === itemId) {
      return { ...item, quantity: newQuantity };
    }
    return item;
  });
  return updatedCartItems;
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
    // Use uma função para inicializar o estado do localStorage
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Salve o carrinho no localStorage sempre que ele for alterado
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const value = {
    cartItems,
    clearCart,
    addItemToCart: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
    removeItemFromCart: (itemId) => dispatch({ type: 'REMOVE_ITEM', payload: itemId }),
    updateQuantity: (itemId, newQuantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, newQuantity } }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};

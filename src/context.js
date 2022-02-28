import React, { useContext, useState } from 'react';
import data from './data';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const products = data.items;

  const openCart = () => {
    setCartIsOpen(true);
  };
  const closeCart = (e) => {
    if (e.target.classList.contains('cart-overlay')) setCartIsOpen(false);
  };
  const removeItem = (id) => {
    const newCart = cart.filter((cartItem) => cartItem.sys.id !== id);
    setCart(newCart);
  };
  return (
    <AppContext.Provider
      value={{
        openCart,
        closeCart,
        cartIsOpen,
        products,
        cart,
        setCart,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };

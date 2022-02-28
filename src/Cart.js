import React, { useState } from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './context';

const Cart = () => {
  const { closeCart, cartIsOpen, cart } = useGlobalContext();
  const [inbag, setInbag] = useState(false);
  return (
    <div
      className={`cart-overlay ${cartIsOpen && 'transparentBcg'}`}
      onClick={(e) => closeCart(e)}
    >
      <div className={`cart ${cartIsOpen && 'showCart'}`}>
        <span className="close-cart">
          <i className="far fa-window-close"></i>
        </span>
        <h2>your cart</h2>
        <div className="cart-content">
          {cart.map((cartItem) => {
            return <CartItem {...cartItem} key={cartItem.sys.id} />;
          })}
        </div>

        <div className="cart-footer">
          <h3>
            your total : $<span className="cart-total">0</span>
          </h3>
          <button className="clear-cart banner-btn">clear cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React from 'react';
import { useGlobalContext } from './context';

const CartItem = (props) => {
  const { removeItem } = useGlobalContext();
  const {
    sys: { id },
    fields: { title, price },
    fields: {
      image: {
        fields: {
          file: { url },
        },
      },
    },
  } = props;
  return (
    <div className="cart-item">
      <img src={url} alt="product" />
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <span className="remove-item" onClick={() => removeItem(id)}>
          remove
        </span>
      </div>
      <div>
        <i className="fas fa-chevron-up"></i>
        <p className="item-amount">1</p>
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default CartItem;

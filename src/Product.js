import React, { useState, useRef } from 'react';
import { useGlobalContext } from './context';

const Product = (props) => {
  const { openCart, cart, products, setCart } = useGlobalContext();
  const [inbag, setInbag] = useState(false);
  const btnElement = useRef(null);
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
  const handleCart = (id) => {
    openCart();
    setInbag(true);
    const cartItem = products.find((item) => item.sys.id === id);
    setCart([...cart, cartItem]);
    btnElement.current.disabled = true;
  };
  // const url = props.fields.image.fields.file.url;
  console.log(url);
  // console.log(id, title, price, url);
  return (
    <article className="product" id={id}>
      <div className="img-container">
        <img src={url} alt="product" className="product-img" />
        <button
          className="bag-btn"
          onClick={() => handleCart(id)}
          ref={btnElement}
        >
          <i className="fas fa-shopping-cart"></i>
          {inbag ? 'in bag' : 'add to bag'}
        </button>
      </div>
      <h3>{title}</h3>
      <h4>${price}</h4>
    </article>
  );
};

export default Product;

import React, { useState } from 'react';
import Product from './Product';
import { useGlobalContext } from './context';

const Products = () => {
  const { products } = useGlobalContext();
  const [inbag, setInbag] = useState(false);

  return (
    <section className="products">
      <div className="section-title">
        <h2>our products</h2>
      </div>
      <div className="products-center">
        {products.map((item) => {
          return <Product key={item.sys.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Products;

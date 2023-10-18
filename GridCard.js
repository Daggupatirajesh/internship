// Inside GridCard.js
import React from 'react';

const GridCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', width: '200px' }}>
      <img src={product.product_image} alt={product.product_title} style={{ width: '100%' }} />
      <h3>{product.product_title}</h3>
      <p>{product.product_badge}</p>
      <p>Variants: {product.product_variants.join(', ')}</p>
    </div>
  );
};

export default GridCard;

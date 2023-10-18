// Inside ListCard.js
import React from 'react';

const ListCard = ({ product, searchKey }) => {
  const highlightMatch = (text, searchKey) => {
    if (!searchKey) return text;
    
    const regex = new RegExp(`(${searchKey})`, 'gi');
    return text.split(regex).map((part, index) => 
      regex.test(part) ? <mark key={index}>{part}</mark> : part
    );
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <img src={product.image} alt={product.title} style={{ width: '100px', marginRight: '10px' }} />
      <div>
        <h3>{highlightMatch(product.title, searchKey)}</h3>
        <p>{product.badge}</p>
        <p>Variants: {product.variants.join(', ')}</p>
      </div>
    </div>
  );
};

export default ListCard;



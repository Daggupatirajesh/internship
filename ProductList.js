import React, { useState, useEffect } from 'react';
import GridCard from './GridCard';
import ListCard from './ListCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [view, setView] = useState('grid');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093');
        const data = await response.json();
        console.log('API Data:', data);
        setProducts(data.products || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchKey(event.target.value);
  };

  const switchView = () => {
    setView((prevView) => (prevView === 'grid' ? 'list' : 'grid'));
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Search" value={searchKey} onChange={handleSearch} />
        <button onClick={switchView}>Switch View</button>
      </div>
      <div>
        {view === 'grid' ? (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.map((product) => (
              <GridCard key={product.product_title} product={product} />
            ))}
          </div>
        ) : (
          <div>
            {products.map((product) => (
              <ListCard key={product.product_title} product={product} searchKey={searchKey} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;

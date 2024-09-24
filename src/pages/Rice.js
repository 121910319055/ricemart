// import React from 'react';
import './Rice.css'; // Import the CSS file (Make sure the path is correct)
import images from '../utils/imageImports'; // Import images

const Rice = () => {
  // Rice products array with local image imports
  const riceProducts = [
    { id: 1, description: 'Product 1 description', price: 100, image: images.product1 },
    { id: 2, description: 'Product 2 description', price: 200, image: images.product2 },
    { id: 3, description: 'Product 3 description', price: 150, image: images.product3 },
    { id: 4, description: 'Product 4 description', price: 250, image: images.product4 },
    { id: 5, description: 'Wild Rice', price: 90, image: images.rice5 },
    { id: 6, description: 'Arborio Rice', price: 100, image: images.rice6 },
  ];

  return (
    <div>
      <h1>Rice Products</h1>
      <div className="rice-product-container">
        {riceProducts.map((product) => (
          <div key={product.id} className="rice-product-card">
            <img src={product.image} alt={product.description} className="rice-product-image" />
            <div className="rice-product-description">{product.description}</div>
            <div className="rice-product-price">${product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rice;

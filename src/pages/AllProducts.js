// import React from 'react';
import './AllProducts.css'; // Import the CSS file (Make sure the path is correct)
import images from '../utils/imageImports'; // Import images

const AllProducts = () => {
  // Product array with local image imports
  const products = [
    { id: 1, description: 'Product 1 description', price: 100, image: images.product1 },
    { id: 2, description: 'Product 2 description', price: 200, image: images.product2 },
    { id: 3, description: 'Product 3 description', price: 150, image: images.product3 },
    { id: 4, description: 'Product 4 description', price: 250, image: images.product4 },
    { id: 5, description: 'Product 5 description', price: 150, image: images.product5 },
    { id: 6, description: 'Product 6 description', price: 250, image: images.product6 },
    { id: 7, description: 'Product 7 description', price: 100, image: images.product7 },
    { id: 8, description: 'Product 8 description', price: 200, image: images.product8 },
    { id: 9, description: 'Product 9 description', price: 150, image: images.product9 },
    { id: 10, description: 'Product 10 description', price: 250, image: images.product10 },
    { id: 11, description: 'Product 11 description', price: 150, image: images.product11 },
    { id: 12, description: 'Product 12 description', price: 250, image: images.product12 },
  
  ];

  return (
    <div>
      <h1>All Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.description} className="product-image" />
            <div className="product-description">{product.description}</div>
            <div className="product-price">${product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

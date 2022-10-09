import React from 'react';

import { products } from '@/mocks/products';

import { ProductCard } from '@/components/ProductCard';

import './styles.css';

export function ProductsListContainer() {
  return (
    <div className="products-list-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

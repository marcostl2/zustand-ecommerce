import { formatCurrency } from '@/helpers';
import { useCartStore } from '@/store';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

import './styles.css';

export function ProductCard({ product }: ProductCardProps) {
  const addProduct = useCartStore((store) => store.addProduct);

  return (
    <div className="product-card">
      <div
        style={{ backgroundImage: `url(${product.url})` }}
        className="product-card__img"
      />
      <p className="product-card__name">{product.name}</p>
      <b className="product-card__price">{formatCurrency(product.price)}</b>
      <button onClick={() => addProduct(product)}>Add to cart</button>
    </div>
  );
}

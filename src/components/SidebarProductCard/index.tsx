import { formatCurrency } from '@/helpers';
import { useCartStore } from '@/store';
import { ProductCart } from '@/types';

interface SidebarProductCardProps {
  product: ProductCart;
}

const Add = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
  </svg>
);

const Subtract = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 11h14v2H5z" />
  </svg>
);

import './styles.css';

export function SidebarProductCard({ product }: SidebarProductCardProps) {
  const { removeProduct, addProduct } = useCartStore((state) => state);

  return (
    <div className="sidebar-product-card">
      <div
        style={{ backgroundImage: `url(${product.url})` }}
        className="sidebar-product-card__img"
      />
      <div className="sidebar-product-card-info">
        <p>{product.name}</p>
        <b>
          {product.quantity} x {formatCurrency(product.price)}
        </b>
        <div className="sidebar-product-card-info-actions">
          <div onClick={() => addProduct(product)}>
            <Add />
          </div>
          <div onClick={() => removeProduct(product.id)}>
            <Subtract />
          </div>
        </div>
      </div>
    </div>
  );
}

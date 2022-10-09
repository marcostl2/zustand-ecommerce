import { Add } from '@/assets/Add';
import { Subtract } from '@/assets/Subtract';
import { formatCurrency } from '@/helpers';

import { useCartStore } from '@/store';
import { ProductCart } from '@/types';

interface SidebarProductCardProps {
  product: ProductCart;
}

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

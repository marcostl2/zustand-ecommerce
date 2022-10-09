import { Link, useNavigate } from 'react-router-dom';

import { useCartStore, useSettingsStore } from '@/store';

import { SidebarProductCard } from '@/components/SidebarProductCard';

import { ArrowBack } from '@/assets/ArrowBack';

import './styles.css';

export function Checkout() {
  const { products } = useCartStore((state) => state);
  const { toggleTooltip } = useSettingsStore((state) => state);

  const navigate = useNavigate();

  function handleToggleToolip() {
    toggleTooltip();
    setTimeout(() => {
      toggleTooltip();
      navigate('/success-purchase');
    }, 2500);
  }

  return (
    <div className="container checkout-page">
      <Link to="/" className="checkout-page__go-back-btn">
        <ArrowBack />
        Go back
      </Link>
      <h1 className="checkout-page__title">Confirm your purchase</h1>
      <div className="checkout-page-products">
        {products.map((product) => (
          <SidebarProductCard key={product.id} product={product} />
        ))}
      </div>
      <hr />
      <button
        onClick={handleToggleToolip}
        className="checkout-page__purchase-btn"
      >
        Purchase Now
      </button>
    </div>
  );
}

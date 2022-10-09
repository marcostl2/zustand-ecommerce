import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useCartStore, useSettingsStore } from '@/store';

import shoppingImg from '@/assets/shopping.svg';

import './styles.css';

export function SuccessPurchase() {
  const { cleanCart } = useCartStore((state) => state);
  const { toggleSidebar } = useSettingsStore((state) => state);

  useEffect(() => {
    toggleSidebar();
    cleanCart();
  }, []);

  return (
    <div className="success-purchase-page">
      <img src={shoppingImg} alt="Men with a shopping cart" />
      <h3>Thanks for shopping with us</h3>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

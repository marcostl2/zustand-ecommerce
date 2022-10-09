import { Link } from 'react-router-dom';

import { formatCurrency } from '@/helpers';

import { useCartStore, useSettingsStore } from '@/store';
import { SidebarProductCard } from '../SidebarProductCard';

import { ArrowBack } from '@/assets/ArrowBack';
import { Cart } from '@/assets/Cart';

import './styles.css';

export function CartSidebar() {
  const cartProducts = useCartStore((state) => state.products);
  const { sidebarIsOpen, toggleSidebar } = useSettingsStore((state) => state);

  const total: number = cartProducts.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <div
      className={`cart-sidebar ${sidebarIsOpen ? 'cart-sidebar--open' : ''}`}
    >
      <div
        className={`cart-sidebar-wrapper ${
          sidebarIsOpen ? 'cart-sidebar-wrapper--open' : ''
        }`}
      >
        <button
          onClick={() => toggleSidebar()}
          className="cart-sidebar__toggler"
        >
          <ArrowBack />
        </button>

        {sidebarIsOpen ? (
          <>
            <h4 className="cart-sidebar-title">Cart</h4>
            <div className="cart-sidebar-list">
              {cartProducts.map((product) => (
                <SidebarProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="cart-sidebar-alert" onClick={() => toggleSidebar()}>
            <Cart />
            {cartProducts.length > 0 && (
              <div className="cart-sidebar-alert__badge">
                {cartProducts.length}
              </div>
            )}
          </div>
        )}

        <div
          className={`cart-sidebar-checkout-wrapper ${
            sidebarIsOpen ? 'cart-sidebar-checkout-wrapper--open' : ''
          }`}
        >
          <div className="cart-sidebar-checkout">
            <h4>Total: {formatCurrency(total)}</h4>
            {sidebarIsOpen && (
              <Link to={'/checkout'} className="cart-sidebar-checkout__link">
                <Cart /> Checkout
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

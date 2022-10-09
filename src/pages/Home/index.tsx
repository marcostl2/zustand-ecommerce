import { CartSidebar } from '@/components/CartSidebar';
import { ProductsListContainer } from '@/containers/ProductsListContainer';

export function Home() {
  return (
    <>
      <div className="container">
        <h1>E-commerce</h1>
        <ProductsListContainer />
      </div>
      <CartSidebar />
    </>
  );
}

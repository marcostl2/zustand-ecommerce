import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { Checkout } from '@/pages/Checkout';
import { SuccessPurchase } from '@/pages/SuccessPurchase';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success-purchase" element={<SuccessPurchase />} />
      </Routes>
    </BrowserRouter>
  );
}

export interface Product {
  name: string;
  price: number;
  id: number;
  url: string;
}

export interface ProductCart extends Product {
  quantity: number;
}

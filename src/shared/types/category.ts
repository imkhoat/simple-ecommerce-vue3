export interface ProductItem {
  images: String[];
  title: String;
  price: Number;
  amount: Number;
  code: String;
  description: String;
}
export interface CartItem {
  product: ProductItem;
  quantity: Number;
}

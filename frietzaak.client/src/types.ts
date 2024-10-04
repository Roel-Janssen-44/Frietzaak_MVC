export type Order = {
  id: number;
  dateTime: string;
  estimatedCompletionTime: string;
  completed: true | false;
  orderLines: OrderLine[];
};

export type OrderLine = {
  id: number;
  product: Product;
  amount: number;
  productId: number;
};

export type Category = {
  id: number;
  name: string;
  products: Product[];
};

export type Product = {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
};

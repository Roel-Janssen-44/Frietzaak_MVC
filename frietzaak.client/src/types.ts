export type Order = {
  id: number;
  number: number;
  status: "open" | "closed";
  orderLines: OrderLine[];
};

export type OrderLine = {
  id: number;
  product: Product;
  quantity: number;
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

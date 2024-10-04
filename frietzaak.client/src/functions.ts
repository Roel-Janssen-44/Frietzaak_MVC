import { Product, Order } from "./types";

export const convertToCurrency = (price: number) => {
  return `€ ${price.toFixed(2).replace(".", ",")}`;
};

export const findProductById = ({
  productId,
  products,
}: {
  productId: number;
  products: Product[];
}): { product: Product } | undefined => {
  for (const product of products) {
    if (product.id == productId) {
      return {
        product: product,
      };
    }
  }
  return undefined;
};

export const calculateTotalPrice = (order: Order) => {
  let total = 0;
  for (const orderLine of order.orderLines) {
    if (
      orderLine.product.discountPrice !== null &&
      orderLine.product.discountPrice !== undefined &&
      orderLine.product.discountPrice !== orderLine.product.price
    ) {
      total += orderLine.product.discountPrice * orderLine.amount;
    } else {
      total += orderLine.product.price * orderLine.amount;
    }
  }
  return total;
};

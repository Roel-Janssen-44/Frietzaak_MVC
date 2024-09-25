import { Product } from "./types";

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

"use client";

import { Link } from "react-router-dom";
import { Product, OrderLine } from "../types";
import Currency from "./Currency";
import Button from "./Button";

export default function ProductCard({ product }: { product: Product }) {
  const templateOrderLine: OrderLine = {
    id: 1,
    product: product,
    amount: 1,
    productId: product.id,
  };

  return (
    <Link
      to={`/dashboard/owner/products/${product.id}`}
      className="block w-56 h-auto p-2 group rounded text-center"
    >
      <img
        src={`/${product.image}.jpg`}
        alt={product.name}
        className="w-full rounded mb-4"
      />
      <h3 className="mb-2">Product: {product.name}</h3>
      <div className="text-center">
        <Currency orderLine={templateOrderLine} className="justify-center" />
      </div>
      <Button priority="primary" className="mx-auto mt-2">
        Bewerken
      </Button>
    </Link>
  );
}

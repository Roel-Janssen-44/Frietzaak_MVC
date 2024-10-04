"use client";

import { useState } from "react";
import PageTitle from "./PageTitle";
import { OrderLine, Product, Order } from "../types";
import { FaPlus } from "react-icons/fa";
import { convertToCurrency } from "../functions";
import Currency from "./Currency";

export default function Products({
  products,
  setOrder,
}: {
  products: Product[];
  setOrder: Function;
}) {
  const [activeProducts, setActiveProducts] = useState(products);

  const addProductToOrder = (product: Product) => {
    setOrder((order: Order) => {
      const orderLine = order.orderLines.find(
        (orderLine: OrderLine) => orderLine.product.id === product.id
      );

      if (orderLine) {
        orderLine.amount++;
      } else {
        return {
          ...order,
          orderLines: [
            ...order.orderLines,
            {
              productId: product.id,
              id: 0,
              product: product,
              amount: 1,
            },
          ],
        };
      }

      return { ...order };
    });
  };

  return (
    <div className="pb-24  max-w-[700px] mx-auto">
      <PageTitle color="primary" title="Alle producten" />

      <ul>
        {products?.map((product) => (
          <li
            key={product.id}
            className="h-24 flex py-4 flex-row gap-4 justify-between items-center"
          >
            <img
              src={`/${product.image}.jpg`}
              alt={product.name}
              className="rounded-md w-auto h-full object-cover w-24"
            />
            <h3 className="flex-1 ml-8">{product.name}</h3>
            <span className="mr-12">
              <Currency
                orderLine={{
                  id: 0,
                  product: product,
                  amount: 1,
                  productId: product.id,
                }}
              />
            </span>
            <button
              type="button"
              title="Add product to order"
              onClick={() => addProductToOrder(product)}
              className="bg-primary h-10 w-10 rounded-full full flex items-center justify-center"
            >
              <FaPlus className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

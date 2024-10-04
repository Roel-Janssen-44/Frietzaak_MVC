"use client";

import { Order } from "../types";
import { convertToCurrency, calculateTotalPrice } from "../functions";
import Currency from "./Currency";

export default function OrderSummary({ order }: { order: Order }) {
  return (
    <div>
      <div key={order.id} className="flex justify-between flex-col">
        {order.orderLines.map((orderLine) => (
          <div
            key={orderLine.id}
            className="flex justify-between flex-row mb-4 last-of-type:mb-0 h-20 items-center gap-8"
          >
            <img
              src={`/${orderLine.product.image}.jpg`}
              alt={`${orderLine.product.name}`}
              className="w-auto h-full rounded"
            />
            <div className="flex-1">{orderLine.product.name}</div>
            <div>{orderLine.amount}</div>
            <div>X</div>
            <div className="w-[150px] text-right font-title text-2xl ">
              <Currency orderLine={orderLine} className="justify-end" />
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-end gap-2 items-center mt-6">
          <div>Totaal:</div>
          <div className="font-title text-xl">
            {convertToCurrency(calculateTotalPrice(order))}
          </div>
        </div>
      </div>
    </div>
  );
}

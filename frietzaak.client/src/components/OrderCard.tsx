"use client";

import { Order } from "@/app/lib/types";

export default function OrderCard({ order }: { order: Order }) {
  return (
    <div className="bg-yellow-500 w-48 h-auto p-6 rounded text-left">
      <h4 className="mb-1">Order nummer: {order.Number}</h4>
      <p className="mb-2">10-10-2020 - 10:40</p>
      {order.OrderLines.map((orderLine) => (
        <div key={orderLine.Id} className="flex flex-row gap-2">
          <span>{orderLine.Quantity} x</span>
          <span>{orderLine.Product.Name}</span>
        </div>
      ))}
      {order.Status === "open" && (
        <div className="relative mt-6 flex items-center border border-dark rounded">
          <input
            id={`order-${order.Number}`}
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
          />
          <label
            htmlFor={`order-${order.Number}`}
            className="w-full py-4 text-sm font-medium text-gray-900"
          ></label>
        </div>
      )}
      {order.Status === "closed" && (
        <div className="relative mt-6 flex items-center border border-dark rounded">
          <input
            defaultChecked
            id={`order-${order.Number}`}
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
          />
          <label
            htmlFor={`order-${order.Number}`}
            className="w-full py-4 text-sm font-medium text-gray-900"
          ></label>
        </div>
      )}
    </div>
  );
}

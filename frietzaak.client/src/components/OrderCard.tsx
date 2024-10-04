"use client";

import { Order } from "../types";
import { useNavigate } from "react-router-dom";

export default function OrderCard({ order }: { order: Order }) {
  const navigate = useNavigate();

  const updateOrderStatus = async () => {
    let orderStatus;

    // Switch order status to the opposite of the current status
    if (order.completed) {
      orderStatus = "open";
    } else {
      orderStatus = "completed";
    }

    try {
      const response = await fetch(
        `https://localhost:7006/update/orderstatus/${order.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderStatus),
        }
      );

      if (response.ok) {
        navigate(0);
        console.log("Order statusupdated");
      } else {
        console.error("Failed to update order");
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <div className="bg-yellow-500 w-48 h-auto p-6 rounded text-left">
      <h4 className="mb-1">Order nummer: {order.id}</h4>
      <p className="mb-2">10-10-2020 - 10:40</p>
      {order.orderLines.map((orderLine) => (
        <div key={orderLine.id} className="flex flex-row gap-2">
          <span>{orderLine.amount} x</span>
          <span>{orderLine.product.name}</span>
        </div>
      ))}
      {order.completed == false && (
        <div className="relative mt-6 flex items-center border border-dark rounded">
          <input
            id={`order-${order.id}`}
            type="checkbox"
            onClick={updateOrderStatus}
            value=""
            name="bordered-checkbox"
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
          />
          <label
            htmlFor={`order-${order.id}`}
            className="w-full py-4 text-sm font-medium text-gray-900"
          ></label>
        </div>
      )}
      {order.completed == true && (
        <div className="relative mt-6 flex items-center border border-dark rounded">
          <input
            defaultChecked
            id={`order-${order.id}`}
            type="checkbox"
            onClick={updateOrderStatus}
            value=""
            name="bordered-checkbox"
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
          />
          <label
            htmlFor={`order-${order.id}`}
            className="w-full py-4 text-sm font-medium text-gray-900"
          ></label>
        </div>
      )}
    </div>
  );
}

"use client";

import { Order } from "../types";
import OrderCard from "./OrderCard";

export default function OrdersToMake({ orders }: { orders: Order[] }) {
  return (
    <div className="flex flex-row flex-wrap gap-12">
      {orders?.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}

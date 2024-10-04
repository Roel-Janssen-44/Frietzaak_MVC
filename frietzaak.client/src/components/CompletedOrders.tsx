"use client";

import OrderCard from "./OrderCard";
import { Order } from "../types";

export default function CompletedOrders({ orders }: { orders: Order[] }) {
  return (
    <div className="flex flex-row flex-wrap gap-12">
      {orders?.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}

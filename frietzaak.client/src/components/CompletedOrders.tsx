"use client";

import OrderCard from "./OrderCard";
import { Order } from "@/app/lib/types";

export default function CompletedOrders({ orders }: { orders: Order[] }) {
  return (
    <div className="flex flex-row flex-wrap gap-12">
      {orders.map((order) => (
        <OrderCard key={order.Id} order={order} />
      ))}
    </div>
  );
}

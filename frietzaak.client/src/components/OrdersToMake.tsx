"use client";

import { Order } from "@/app/lib/types";
import OrderCard from "./OrderCard";

export default function OrdersToMake({ orders }: { orders: Order[] }) {
  return (
    <div className="flex flex-row flex-wrap gap-12">
      {orders.map((order) => (
        <OrderCard key={order.Id} order={order} />
      ))}
    </div>
  );
}

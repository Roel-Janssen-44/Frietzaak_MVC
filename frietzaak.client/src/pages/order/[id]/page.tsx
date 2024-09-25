"use client";

import OrderTable from "../../../components/OrderTable";
import { order } from "../../../data";

export default function OrderPage() {
  return (
    <>
      <OrderTable order={order} />
    </>
  );
}

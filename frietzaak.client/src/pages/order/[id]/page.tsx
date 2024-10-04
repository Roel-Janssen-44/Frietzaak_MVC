"use client";

import OrderTable from "../../../components/OrderTable";
import { useEffect, useState } from "react";
import { Order } from "../../../types";
import { useParams } from "react-router-dom";

export default function OrderPage() {
  const [order, setOrder] = useState<Order | null>(null);

  const params = useParams();
  const orderId = params.id;

  useEffect(() => {
    fetch(`https://localhost:7006/order/${orderId}`)
      .then((response) => response.json())
      .then((data) => setOrder(data));
  }, []);

  useEffect(() => {
    console.log("order");
    console.log(order);
  }, [order]);

  return <>{order && <OrderTable setOrder={setOrder} order={order} />}</>;
}

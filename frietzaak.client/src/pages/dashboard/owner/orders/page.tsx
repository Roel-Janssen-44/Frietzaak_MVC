import PageTitle from "../../../../components/PageTitle";
import CompletedOrders from "../../../../components/CompletedOrders";
import OrdersToMake from "../../../../components/OrdersToMake";
import { Order } from "../../../../types";
import { useEffect, useState } from "react";

export default function Owner() {
  const [orders, setOrders] = useState<Order[] | null>(null);

  useEffect(() => {
    fetch(`https://localhost:7006/orders`)
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  const ordersToMake = orders?.filter((order) => order.completed === false);
  const completedOrders = orders?.filter((order) => order.completed == true);

  return (
    <>
      <PageTitle color="primary" title="Te maken bestellingen" />
      {orders !== null && ordersToMake !== undefined && (
        <OrdersToMake orders={ordersToMake} />
      )}
      <PageTitle
        color="primary"
        title="Gemaakte bestellingen"
        className="mt-10"
      />
      {orders !== null && completedOrders !== undefined && (
        <CompletedOrders orders={completedOrders} />
      )}
    </>
  );
}

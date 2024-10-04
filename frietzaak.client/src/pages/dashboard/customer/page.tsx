import PageTitle from "../../../components/PageTitle";
// import { orders } from "../../../data";
import OrdersTable from "../../../components/OrdersTable";
import { useEffect, useState } from "react";
import { Order } from "../../../types";

export default function Customer() {
  const [orders, setOrders] = useState<Order[] | null>(null);

  useEffect(() => {
    fetch(`https://localhost:7006/orders`)
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  // const ordersToMake = orders?.filter((order) => order.completed === false);
  // const completedOrders = orders?.filter((order) => order.completed == true);

  return (
    <>
      <PageTitle color="primary" title="Mijn bestellingen" />
      {orders && <OrdersTable orders={orders} />}
    </>
  );
}

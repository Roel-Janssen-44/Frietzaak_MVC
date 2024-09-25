import PageTitle from "../../../../components/PageTitle";
import { orders } from "../../../../data";
import CompletedOrders from "../../../../components/CompletedOrders";
import OrdersToMake from "../../../../components/OrdersToMake";

export default function Owner() {
  const ordersToMake = orders.filter((order) => order.Status === "open");
  const completedOrders = orders.filter((order) => order.Status === "closed");

  return (
    <>
      <PageTitle color="primary" title="Te maken bestellingen" />
      <OrdersToMake orders={ordersToMake} />
      <PageTitle
        color="primary"
        title="Gemaakte bestellingen"
        className="mt-10"
      />
      <CompletedOrders orders={completedOrders} />
    </>
  );
}

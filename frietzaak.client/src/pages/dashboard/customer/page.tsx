import PageTitle from "../../../components/PageTitle";
import { orders } from "../../../data";
import OrdersTable from "../../../components/OrdersTable";

export default function Customer() {
  return (
    <>
      <PageTitle color="primary" title="Mijn bestellingen" />
      <OrdersTable orders={orders} />
    </>
  );
}

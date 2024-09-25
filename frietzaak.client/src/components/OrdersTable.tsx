import { Order } from "../types";
import Button from "./Button";

export default function OrdersTable({ orders }: { orders: Order[] }) {
  return (
    <>
      {orders.map((order) => (
        <div className="flex items-center px-4 py-2 odd:bg-gray-200">
          <p className="flex-1">{order.Number}</p>
          <p className="w-40 ml-8">{order.Status}</p>
          <Button
            link={`/dashboard/customer/order/${order.Id}`}
            className="ml-8"
            priority="primary"
          >
            Bekijken
          </Button>
          <Button
            link={`/dashboard/customer/reorder/${order.Id}`}
            className="ml-8"
            priority="secondary"
          >
            Opnieuw bestellen
          </Button>
        </div>
      ))}
    </>
  );
}

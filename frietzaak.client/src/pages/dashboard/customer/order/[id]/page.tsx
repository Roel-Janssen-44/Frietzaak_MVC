import PageTitle from "../../../../../components/PageTitle";
import { Link } from "react-router-dom";
import OrderSummary from "../../../../../components/OrderSummary";
import { Order } from "../../../../../types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewOrder() {
  const [order, setOrder] = useState<Order | null>(null);

  const params = useParams();
  const orderId = params.id;

  useEffect(() => {
    fetch(`https://localhost:7006/order/${orderId}`)
      .then((response) => response.json())
      .then((data) => setOrder(data));
  }, []);

  return (
    <>
      <Link to={"/dashboard/customer"} className="mb-4 block">
        {"<-"} Terug{" "}
      </Link>
      <PageTitle color="primary" title="View order" />
      <div className="text-center w-full">
        <h2 className="font-title text-primary mb-6 text-2xl relative block items-center flex flex-row gap-4 justify-center">
          Bestelnummer: <span className="text-secondary text-4xl">#12345</span>
        </h2>
      </div>
      {order && <OrderSummary order={order} />}
    </>
  );
}

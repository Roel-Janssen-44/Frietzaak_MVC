"use client";

import PageTitle from "../../../../components/PageTitle";
import OrderSummary from "../../../../components/OrderSummary";
import { Order } from "../../../../types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ConfirmationPage() {
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
      <div className="text-center w-full">
        <PageTitle color="primary" title="Bestelling is geplaats!" />
        <h2 className="font-title text-primary mb-6 text-2xl relative block items-center flex flex-row gap-4 justify-center">
          Bestelnummer:{" "}
          <span className="text-secondary text-4xl">#{order?.id}</span>
        </h2>
      </div>
      {order && <OrderSummary order={order} />}
    </>
  );
}

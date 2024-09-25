"use client";

import PageTitle from "../../../../components/PageTitle";
import OrderSummary from "../../../../components/OrderSummary";
import { order } from "../../../../data";

export default function ConfirmationPage() {
  return (
    <>
      <div className="text-center w-full">
        <PageTitle color="primary" title="Bestelling is geplaats!" />
        <h2 className="font-title text-primary mb-6 text-2xl relative block items-center flex flex-row gap-4 justify-center">
          Bestelnummer: <span className="text-secondary text-4xl">#12345</span>
        </h2>
      </div>
      <OrderSummary order={order} />
    </>
  );
}

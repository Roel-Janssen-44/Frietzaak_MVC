"use client";

import { Order } from "../types";
import Button from "./Button";
import PageTitle from "./PageTitle";
import { FaTrash } from "react-icons/fa";
import { convertToCurrency, calculateTotalPrice } from "../functions";

export default function OrderDisplay({
  order,
  setOrder,
  createOrder,
}: {
  order: Order | null;
  setOrder: Function;
  createOrder: Function;
}) {
  return (
    <div className="bg-white shadow-xl border-t-2 border-gray-300 fixed bottom-0 left-0 w-full h-20 flex flex-row justify-center items-center gap-14">
      <div className="flex flex-row gap-2">
        <span>Totaal:</span>
        <h4 className={`font-title text-xl relative block text-dark`}>
          {order !== null && (
            <span>{convertToCurrency(calculateTotalPrice(order))}</span>
          )}

          {order == null && <span>{convertToCurrency(0)}</span>}
        </h4>
      </div>
      <div>
        {/* <Button priority="secondary" link={`/order/${order.id}`}> */}
        <Button priority="secondary" onClick={createOrder}>
          Bestellen
        </Button>
      </div>
      {order?.orderLines.length !== 0 && (
        <div className="absolute right-0 bottom-0 w-64 h-auto bg-primary p-4 rounded-t">
          <PageTitle color="white" title="Winkelmandje" />
          {order?.orderLines.map((orderLine) => (
            <div
              key={orderLine.product.id}
              className="flex flex-row justify-between mb-2"
            >
              {orderLine.product.name} - {orderLine.amount}x
              <button
                onClick={() => {
                  setOrder((order: Order) => {
                    order.orderLines = order.orderLines.filter(
                      (ol) => ol.product.id !== orderLine.product.id
                    );
                    return { ...order };
                  });
                }}
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

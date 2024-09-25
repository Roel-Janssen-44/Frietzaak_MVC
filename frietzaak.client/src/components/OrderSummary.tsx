"use client";

import { Order } from "../types";
import { convertToCurrency } from "../functions";
// import PageTitle from "./PageTitle";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { FaPlus, FaMinus } from "react-icons/fa";
import Currency from "./Currency";
// import Button from "./Button";

export default function OrderSummary({ order }: { order: Order }) {
  return (
    <div>
      <div key={order.Id} className="flex justify-between flex-col">
        {order.OrderLines.map((orderLine) => (
          <div
            key={orderLine.Id}
            className="flex justify-between flex-row mb-4 last-of-type:mb-0 h-20 items-center gap-8"
          >
            <img
              src={`/images/${orderLine.Product.Image}`}
              alt={`${orderLine.Product.Name}`}
              className="w-auto h-full rounded"
            />{" "}
            <div className="flex-1">{orderLine.Product.Name}</div>
            <div>{orderLine.Quantity}</div>
            <div>X</div>
            <div className="w-[150px] text-right font-title text-2xl ">
              <Currency orderLine={orderLine} className="justify-end" />
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-end gap-2 items-center mt-6">
          <div>Totaal:</div>
          <div className="font-title text-xl">{convertToCurrency(53.4)}</div>
        </div>
      </div>
    </div>
  );
}

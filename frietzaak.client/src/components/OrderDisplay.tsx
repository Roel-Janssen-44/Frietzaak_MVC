"use client";

import { Order } from "@/app/lib/types";
import Button from "./Button";
import { convertToCurrency } from "../lib/functions";

export default function OrderDisplay({ order }: { order: Order }) {
  return (
    <div className="bg-white shadow-xl border-t-2 border-gray-300 fixed bottom-0 left-0 w-full h-20 flex flex-row justify-center items-center gap-14">
      <div className="flex flex-row gap-2">
        <span>Totaal:</span>
        <h4 className={`font-title text-xl relative block text-dark`}>
          {convertToCurrency(34.3)}
        </h4>
      </div>
      <div>
        <Button priority="secondary" link={`/order/${order.Id}`}>
          Bestellen
        </Button>
      </div>
    </div>
  );
}

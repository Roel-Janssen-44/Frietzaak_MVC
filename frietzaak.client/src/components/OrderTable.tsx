import { Order } from "../types";
import { convertToCurrency } from "../functions";
import PageTitle from "./PageTitle";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { FaPlus, FaMinus } from "react-icons/fa";
import Currency from "./Currency";
import Button from "./Button";

export default function OrderTable({ order }: { order: Order }) {
  return (
    <div>
      <PageTitle color="primary" title="Winkelmandje" />
      {/* <div>{order.Number}</div>
      <div>{order.Status}</div> */}
      <div key={order.Id} className="flex justify-between flex-col">
        {order.OrderLines.map((orderLine) => (
          <div
            key={orderLine.Id}
            className="flex justify-between flex-row mb-4 last-of-type:mb-0 h-20 items-center gap-8"
          >
            {/* <FaRegTrashAlt /> */}
            Trash
            <img
              src={`/images/${orderLine.Product.Image}`}
              alt={`${orderLine.Product.Name}`}
              className="w-auto h-full rounded"
            />{" "}
            <div className="flex-1">{orderLine.Product.Name}</div>
            <div className="flex flex-row justify-center items-center gap-4">
              <button className="w-8 h-8 bg-primary text-white rounded-full relative">
                {/* <FaMinus className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" /> */}
                -
              </button>
              <div>{orderLine.Quantity}</div>
              <button className="w-8 h-8 bg-primary text-white rounded-full relative">
                +
                {/* <FaPlus className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" /> */}
              </button>
            </div>
            <div>X</div>
            <div className="font-title text-2xl min-w-[125px] text-right">
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
      <div className="container mx-auto mt-6">
        <textarea
          placeholder="Opmerkingen..."
          className="rounded-md p-4 w-full bg-gray-300"
          rows={4}
        ></textarea>
      </div>
      <div className="flex justify-between mt-6">
        <Button priority="tertiary">Terug</Button>
        <Button
          link={`/order/${order.Number}/confirmation`}
          priority="secondary"
        >
          Bestelling plaatsen
        </Button>
      </div>
    </div>
  );
}

"use client";

import { Order, OrderLine } from "../types";
import { convertToCurrency, calculateTotalPrice } from "../functions";
import PageTitle from "./PageTitle";
import { FaRegTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import Currency from "./Currency";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function OrderTable({
  order,
  setOrder,
}: {
  order: Order;
  setOrder: Function;
}) {
  const navigate = useNavigate();

  const addProductToOrder = (orderLine: OrderLine) => {
    setOrder((order: Order) => {
      if (orderLine) {
        orderLine.amount++;
      }
      return { ...order };
    });
  };
  const removeProductFromOrder = (orderLine: OrderLine) => {
    setOrder((order: Order) => {
      if (orderLine.amount > 1) {
        orderLine.amount--;
      } else {
        order.orderLines = order.orderLines.filter(
          (line) => line.id !== orderLine.id
        );
      }
      return { ...order };
    });
  };
  const removeOrderLineFromOrder = (orderLineId: number) => {
    setOrder((order: Order) => {
      order.orderLines = order.orderLines.filter(
        (line) => line.id !== orderLineId
      );
      return { ...order };
    });
  };

  const createOrder = async () => {
    try {
      const response = await fetch(`https://localhost:7006/create/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      if (response.ok) {
        const newOrderId = await response.json();
        navigate(`/order/${newOrderId}/confirmation`);
      } else {
        console.error("Failed to update order");
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <div>
      <PageTitle color="primary" title="Winkelmandje" />
      <div key={order.id} className="flex justify-between flex-col">
        {order.orderLines.map((orderLine) => (
          <div
            key={orderLine.id}
            className="flex justify-between flex-row mb-4 last-of-type:mb-0 h-20 items-center gap-8"
          >
            <button
              onClick={() => removeOrderLineFromOrder(orderLine.id)}
              className="w-10 h-10 cursor-pointer flex items-center justify-center"
            >
              <FaRegTrashAlt />
            </button>
            <img
              src={`/${orderLine.product.image}.jpg`}
              alt={`${orderLine.product.name}`}
              className="w-auto h-full rounded"
            />
            <div className="flex-1">{orderLine.product.name}</div>
            <div className="flex flex-row justify-center items-center gap-4">
              <button
                onClick={() => removeProductFromOrder(orderLine)}
                className="w-8 h-8 bg-primary text-white rounded-full relative"
              >
                <FaMinus className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </button>
              <div>{orderLine.amount}</div>
              <button
                onClick={() => addProductToOrder(orderLine)}
                className="w-8 h-8 bg-primary text-white rounded-full relative"
              >
                <FaPlus className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
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
          <div className="font-title text-xl">
            <h4 className={`font-title text-xl relative block text-dark`}>
              {order !== null && (
                <>
                  <span>{convertToCurrency(calculateTotalPrice(order))}</span>
                </>
              )}

              {order == null && <span>{convertToCurrency(0)}</span>}
            </h4>
          </div>
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
        <Button link={`/`} priority="tertiary">
          Terug
        </Button>
        {/* <Button link={`/order/${order.id}/confirmation`} priority="secondary"> */}
        <Button onClick={() => createOrder()} priority="secondary">
          Bestelling plaatsen
        </Button>
      </div>
    </div>
  );
}

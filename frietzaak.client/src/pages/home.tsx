"use client";

import { useState, useEffect } from "react";
import Products from "../components/Products";
import { Order, Product } from "../types";
import OrderDisplay from "../components/OrderDisplay";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[] | null>(null);
  const [order, setOrder] = useState<Order | null>({
    id: 0,
    dateTime: "2020-10-10T20:00:00",
    estimatedCompletionTime: "2020-10-10T20:30:00",
    completed: false,
    // customerId: 1,
    orderLines: [],
  });

  useEffect(() => {
    fetch(`https://localhost:7006/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const createOrder = async () => {
    try {
      const response = await fetch("https://localhost:7006/create/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        const newOrderId = await response.json();
        navigate(`/order/${newOrderId}`);
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <>
      {products !== null && (
        <Products setOrder={setOrder} products={products} />
      )}
      <OrderDisplay
        setOrder={setOrder}
        order={order}
        createOrder={createOrder}
      />
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Products from "../components/Products";
import { Category, Order, Product } from "../types";
import OrderDisplay from "../components/OrderDisplay";
import { Outlet } from "react-router-dom";

export default function Home() {
  const categories: Category[] = [
    {
      Id: 1,
      Name: "Friet",
      Products: [
        {
          Id: 21,
          Name: "Kleine friet",
          Price: 2.5,
          DiscountPrice: 2,
          Image: "/images/friet.jpeg",
          Category: "",
        },
        {
          Id: 22,
          Name: "Middel friet",
          Price: 2.5,
          Image: "/images/friet.jpeg",
          Category: "",
        },
        {
          Id: 23,
          Name: "Grote friet",
          Price: 2.5,
          Image: "/images/friet.jpeg",
          Category: "",
        },
      ],
    },
    {
      Id: 2,
      Name: "Snacks",
      Products: [
        {
          Id: 4,
          Name: "Frikandel",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
        {
          Id: 5,
          Name: "Kroket",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
        {
          Id: 6,
          Name: "Hamburger",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
        {
          Id: 7,
          Name: "Vega burger",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
      ],
    },
    {
      Id: 3,
      Name: "Burgers",
      Products: [
        {
          Id: 8,
          Name: "Hamburger",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
        {
          Id: 9,
          Name: "Cheeseburger",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
        {
          Id: 10,
          Name: "Vega burger",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
      ],
    },
    {
      Id: 4,
      Name: "Vega",
      Products: [
        {
          Id: 11,
          Name: "Vega burger",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
        {
          Id: 12,
          Name: "Vega frikandel",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
        {
          Id: 13,
          Name: "Vega kroket",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
      ],
    },
    {
      Id: 5,
      Name: "Diversen",
      Products: [
        {
          Id: 14,
          Name: "Saus",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
        {
          Id: 15,
          Name: "Salade",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
        {
          Id: 16,
          Name: "Fruit",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
      ],
    },
    {
      Id: 6,
      Name: "Dranken",
      Products: [
        {
          Id: 17,
          Name: "Cola",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
        {
          Id: 18,
          Name: "Fanta",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
        {
          Id: 19,
          Name: "Sprite",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
        {
          Id: 20,
          Name: "Water",
          Price: 2.5,
          Image: "/images/friet.jpg",
          Category: "",
        },
      ],
    },
  ];

  const [products, setProducts]: any = useState([]);

  useEffect(() => {
    fetch(`https://localhost:7006/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    console.log("products");
    console.log(products);
  }, [products]);

  return (
    <>
      <Products products={products} />
      {/* <Outlet /> */}
      {/* <OrderDisplay order={order} /> */}
    </>
  );
}

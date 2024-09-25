"use client";

import { useState } from "react";
import PageTitle from "./PageTitle";
import { Category, Product } from "../types";
import Button from "./Button";
import { convertToCurrency } from "../functions";

export default function Products({ products }: { products: Product[] }) {
  //const [displayCategories, setDisplayCategories] = useState(categories);
  //const [activeFilter, setActiveFilter] = useState("Alles");

  const [activeProducts, setActiveProducts] = useState(products);

  return (
    <div>
      <h2 className="mb-6 text-3xl">Alle producten</h2>
      {products?.map((product) => (
        <div>
          <h3>{product?.name}</h3>
        </div>
      ))}
    </div>
  );
}

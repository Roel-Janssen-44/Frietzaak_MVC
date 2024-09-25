"use client";

import { useState } from "react";
import { Product } from ".../../../src/types";
import Button from "../../../../../components/Button";
import { convertToCurrency } from "../../../../../functions";
import PageTitle from "../../../../../components/PageTitle";

export default function CreateProduct() {
  const [product, setProduct] = useState({
    id: 0,
    name: "Test product 4",
    price: 20,
    discountPrice: 3,
    category: "Diversen",
  } as Product);

  const createProduct = async () => {
    console.log("creating product");
    try {
      const response = await fetch("https://localhost:7006/create/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        const newProduct = await response;
        setProduct({
          id: 0,
          name: "",
          price: 0,
          discountPrice: 0,
          image: "",
          category: "",
        });
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleChange = (fieldName: string, value: string) => {
    console.log("handle change", fieldName, value);
    if (fieldName == "image") {
      setProduct(
        (prevProduct) =>
          ({
            ...prevProduct,
            image: value,
            category: value,
          } as Product)
      );
      return;
    }
    setProduct(
      (prevProduct) =>
        ({
          ...prevProduct,
          [fieldName]: value,
        } as Product)
    );
  };

  return (
    <div>
      <PageTitle color="primary" title="Product maken" />
      <img
        src={`/src/public/${product?.image}.jpeg`}
        className="rounded mb-4"
      />
      <label className="inline-block w-[150px]" htmlFor="pet-select">
        Categorie:
      </label>
      <select
        onChange={(e) => {
          handleChange("image", e.target.value);
        }}
        name="pets"
        id="pet-select"
        className="mb-4 border-2 border-black py-1 px-2 rounded w-[175px]"
      >
        <option value="">-- Kies een optie --</option>
        <option value="friet">Friet</option>
        <option value="snacks">Snacks</option>
        <option value="burgers">Burgers</option>
        <option value="vega">Vega</option>
        <option value="diversen">Diversen</option>
        <option value="dranken">Dranken</option>
      </select>
      <div className="mb-2">
        <label className="inline-block w-[150px]" htmlFor="name">
          Productnaam:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={product?.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="border-2 border-black rounded w-[175px] py-1 px-2"
        />
      </div>
      <div className="mb-2">
        <label className="inline-block inline-block w-[150px]" htmlFor="price">
          Prijs:
        </label>
        <input
          type="text"
          id="price"
          name="price"
          value={product?.price}
          onChange={(e) => handleChange("price", e.target.value)}
          className="border-2 border-black rounded w-[175px] py-1 px-2"
        />
      </div>
      <div className="mb-2">
        <label
          className="inline-block inline-block w-[150px]"
          htmlFor="discountPrice"
        >
          Kortingsprijs:
        </label>
        <input
          type="text"
          id="discountPrice"
          name="discountPrice"
          value={product?.discountPrice}
          onChange={(e) => handleChange("discountPrice", e.target.value)}
          className="border-2 border-black rounded w-[175px] py-1 px-2"
        />
      </div>
      <Button priority="primary" onClick={createProduct}>
        Opslaan
      </Button>
    </div>
  );
}

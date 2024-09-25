"use client";

import { useState } from "react";
import PageTitle from "../../../../../components/PageTitle";
import { Category, Product } from ".../../../src/types";
import Button from "../../../../../components/Button";
import { convertToCurrency } from "../../../../../functions";

export default function CreateProduct() {
  const [product, setProduct] = useState({
    Id: 0,
    Name: "Test product 4",
    Price: 20,
    DiscountPrice: 3,
    Category: "Diversen",
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
        console.log("newProduct");
        const newProduct = await response;
        console.log(newProduct);
        //setActiveProducts((prevProducts) => [...prevProducts, newProduct]);
        setProduct({
          Id: 0,
          Name: "",
          Price: 0,
          DiscountPrice: 0,
          Image: "",
          Category: "Diversen",
        });
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleChange = (fieldName: string, value: string) => {
    //setProduct((prevProduct) => ({
    //        ...prevProduct,
    //        [fieldName]: value,
    //    } as Product)
    //);
  };

  const handleCategoryChange = (category: string) => {
    // const categoryId = categories.find((c) => c.Name === category)?.Id;
    // setProduct(
    //   (prevProduct) =>
    //     ({
    //       ...prevProduct,
    //       CategoryId: categoryId,
    //     } as Product)
    // );
  };

  return (
    <div>
      Create product
      <img src={`${product?.Image}`} className="rounded mb-4" />
      <label className="inline-block w-[150px]" htmlFor="pet-select">
        Categorie:
      </label>
      <select
        onChange={(e) => {
          handleChange("image", e.target.value);
          handleCategoryChange(e.target.value);
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
          value={product?.Name}
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
          value={product?.Price}
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
          value={product?.DiscountPrice}
          onChange={(e) => handleChange("discountPrice", e.target.value)}
          className="border-2 border-black rounded w-[175px] py-1 px-2"
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-3 py-2 border-2 border-black rounded"
        onClick={createProduct}
      >
        Opslaan
      </button>
    </div>
  );
}

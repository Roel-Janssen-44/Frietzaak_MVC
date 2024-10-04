"use client";

import { useState, useEffect } from "react";
import { Product } from "../../../../../types";
import Button from "../../../../../components/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

export default function ProductView() {
  const location = useLocation();
  const navigate = useNavigate();
  const productId = location.pathname.split("/")[4];

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://localhost:7006/product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productId),
        });

        if (response.ok) {
          const newProduct = await response.json();
          console.log("newProduct:", newProduct);
          setProduct(newProduct);
        } else {
          console.error("Failed to fetch product");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

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

  useEffect(() => {
    console.log(product);
  }, [product]);

  const editProduct = async () => {
    console.log("creating product");
    try {
      const response = await fetch("https://localhost:7006/edit/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        navigate("/dashboard/owner/products");
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const deleteProduct = async () => {
    console.log("creating product");
    try {
      const response = await fetch("https://localhost:7006/delete/product", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productId),
      });

      if (response.ok) {
        navigate("/dashboard/owner/products");
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <Link className="mb-10 block" to={"/dashboard/owner/products"}>
        {`<-`} Terug
      </Link>
      <img src={`/${product?.image}.jpg`} className="rounded mb-4" />
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
      {/* <Button priority="primary" className="mt-4"> */}
      <Button priority="primary" onClick={editProduct}>
        Opslaan
      </Button>
      <Button className="mt-4" priority="tertiary" onClick={deleteProduct}>
        {/* <Trash /> */}
        <FaRegTrashAlt size={18} />
      </Button>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import PageTitle from "../../../../components/PageTitle";
import { Product, Category } from "../../../../types";
import ProductCard from "../../../../components/ProductCard";

export default function Products() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`https://localhost:7006/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data as Product[]));
  }, []);

  useEffect(() => {
    setCategories(mapProductsToCategories(products));
  }, [products]);

  const mapProductsToCategories = (products: Product[]): Category[] => {
    // Create a map to group products by category name
    const categoryMap: { [key: string]: Product[] } = {};

    products.forEach((product) => {
      const categoryName = product.category;

      // Initialize the category if it doesn't exist in the map
      if (!categoryMap[categoryName]) {
        categoryMap[categoryName] = [];
      }

      // Add the product to the corresponding category
      categoryMap[categoryName].push(product);
    });

    // Convert the map into a list of Category objects
    const categories: Category[] = Object.keys(categoryMap).map(
      (categoryName, index) => ({
        id: index + 1, // Assigning a unique ID to each category (you can modify this logic as needed)
        name: categoryName,
        products: categoryMap[categoryName],
      })
    );

    return categories;
  };

  return (
    <>
      <PageTitle color="primary" title="Alle producten" />
      {categories.map((category) => (
        <div key={"Category-" + category.id}>
          <h2
            className={`mt-6 font-title mb-2 text-xl relative block text-primary`}
          >
            {category.name}
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap gap-4">
            {category.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

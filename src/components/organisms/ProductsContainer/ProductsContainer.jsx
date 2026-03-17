import React from "react";
import { ProductCard } from "../../molecules/ProductCard/ProductCard.jsx";
import style from "./ProductsContainer.module.css";

export const ProductsContainer = ({ products, addToCart }) => {
  return (
    <>
      <div className={style.hi}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
};

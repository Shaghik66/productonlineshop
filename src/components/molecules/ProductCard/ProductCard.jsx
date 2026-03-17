import React from "react";
import { NavLink } from "react-router-dom";
import { BuyButton } from "../../atoms/BuyButton/BuyButton";
import style from "./ProductCard.module.css";

export function ProductCard({ product, addToCart }) {
  return (
    <div className={style.productBox}>
      <NavLink to={`/products/${product.id}`} className={style.productImageDiv}>
        <img className={style.productImage} src={product.image} alt="" />
      </NavLink>
      <p className={style.productTitle}>{product.title}</p>
      <p className={style.productDescription}>{product.description}</p>
      <div className={style.priceBuyDiv}>
      <BuyButton addToCart={addToCart} product={product}/>
      <p className={style.productPrice}>{`Price ${product.price}$`}</p>
      </div>
    </div>
  );
}

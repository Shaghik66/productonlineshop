import React from "react";
import style from"./ProductCard.module.css"

export function ProductCard ({ product }){
  return (
    <div className={style.productBox}>
      <div className={style.productImageDiv}>
      <img className={style.productImage} src={product.image} alt="" />
      </div>
      <p className={style.productTitle}>{product.title}</p>
      <p className={style.productDescription}>{product.description}</p>
      <p className={style.productPrice}>{`Price ${product.price}$`}</p>
    </div>
  );
};

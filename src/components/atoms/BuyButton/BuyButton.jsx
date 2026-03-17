import style from "./BuyButton.module.css"

export function BuyButton({ addToCart, product }) {
  return (
    <>
      <button className={style.buyButton} onClick={()=> addToCart(product)}>Buy</button>
    </>
  );
}

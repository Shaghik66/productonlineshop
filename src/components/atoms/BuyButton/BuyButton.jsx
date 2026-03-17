export function BuyButton({ addToCart, product }) {
  return (
    <>
      <button onClick={()=> addToCart(product)}>+</button>
    </>
  );
}

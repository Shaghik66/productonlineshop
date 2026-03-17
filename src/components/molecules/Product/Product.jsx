import { useParams } from "react-router-dom";

export function Product({ products }) {
  const { id } = useParams();

  const cart = products.find((el) => {
    return el.id === +id;
  });

  return (
    <>
      <p>{cart.title}</p> <img src={cart.image} alt="" /> <p>{cart.price}</p>
    </>
  );
}

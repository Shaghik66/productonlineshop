import { ProductsContainer } from "../../organisms/ProductsContainer/ProductsContainer";

export const Products = ({ products, addToCart }) => {
  return (
    <div>
      <ProductsContainer products={products} addToCart={addToCart}/>
    </div>
  );
};

import { ProductsContainer } from "../../components/organisms/ProductsContainer/ProductsContainer";

export const Products = ({ products }) => {
  return (
    <div>
        <ProductsContainer products={products}/>
    </div>
  );
};

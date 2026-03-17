import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Products } from "../components/pages/index";
import { Layout } from "../components/templates/Layout/Layout";
import { Product } from "../components/molecules/Product/Product";
import { Cart } from "../components/pages/Cart/Cart";
import "./style/style.css";

function App({ products }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home products={products} />} />
          <Route
            path="/products"
            element={<Products products={products} addToCart={addToCart} />}
          />
          <Route
            path="/products/:id"
            element={<Product products={products} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;

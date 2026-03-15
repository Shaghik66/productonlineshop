import { BrowserRouter } from "react-router-dom";
import { products } from "./shared/constants/products";
import { createRoot } from "react-dom/client";
import App from "../src/app/App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App products={products} />
  </BrowserRouter>,
);

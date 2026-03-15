import { Route, Routes } from "react-router-dom";
import { Home, Products } from"../pages/index";
import { Layout } from "../components/templates/Layout/Layout";
import "./style/style.css"

function App({products}) {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home products={products}/>} />
          <Route path="/products" element={<Products products={products}/>} />
          <Route path="*" element={<Products products={products}/>} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;

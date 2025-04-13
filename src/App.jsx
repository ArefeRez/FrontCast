import { useState } from "react";
import Layout from "./Layout";
import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "./pages/Home";
import Course from "./pages/Course";
import MyAccount from "./pages/MyAccount";
import ThemeContextComponent from "./Contexts/ThemeContext";
import Shoppingcart from "./pages/Shoppingcart";
import ProductsDetails from "./pages/ProductsDetails";

function App() {
  return (
    <ThemeContextComponent>
      <Routes>
        <Route path="/" element={<Layout>{<Home />}</Layout>} />
        <Route path="/myAccount" element={<Layout>{<MyAccount />}</Layout>} />
        <Route path="/course" element={<Layout>{<Course />}</Layout>} />
        <Route path="/cart" element={<Layout>{<Shoppingcart/>}</Layout>} />
        <Route path={"/product/:id"} element={<Layout>{<ProductsDetails/>}</Layout>}/>

      </Routes>
    </ThemeContextComponent>
  );
}

export default App;

import { useState } from "react";
import Layout from "./Layout";
import { Route } from "react-router";
import { Routes } from "react-router";
function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout>home</Layout>}/>
      <Route path="/myAccount" element={<Layout>myAccount</Layout>}/>
    </Routes>
  );
}

export default App;

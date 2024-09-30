import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App;

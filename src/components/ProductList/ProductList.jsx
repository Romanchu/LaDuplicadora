import React from "react";
import './ProductList.css';

function ProductList() {
  const products = [
    { id: 1, name: "Lápiz", price: "$10", image: "ruta-de-tu-imagen-lapiz" },
    { id: 2, name: "Lapicera", price: "$20", image: "ruta-de-tu-imagen-lapicera" },
    { id: 3, name: "Bloc de hojas", price: "$50", image: "ruta-de-tu-imagen-bloc" },
    // Añade más productos aquí
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

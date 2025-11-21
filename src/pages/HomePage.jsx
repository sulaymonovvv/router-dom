import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6 p-6 ">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow ">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 mx-auto"
          />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-sm text-gray-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

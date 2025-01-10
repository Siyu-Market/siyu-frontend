import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    
    fetch("https://siyumarket-backend.vercel.app/product/all")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []); 
  return (
    <div className="p-8">
      {loading ? (
        <Spinner /> 
      ) : (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              
              <img
                src={product.image_uurl}
                alt={product.name}
                className="w-full h-[150px] object-contain rounded"
              />


              <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-gray-700 mt-2">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  {/* Discounted Price */}
                  <span className="text-xl font-semibold text-black">
                    ${product.discounted_price}
                  </span>
                  <span className="text-sm text-gray-500">
                    {product.stock} items available
                  </span>
                </div>
              </div>

              <button className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-500  transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-8">
        <button className="rounded-[4px] px-[48px] py-[16px] mx-auto bg-black text-white hover:bg-gray-500 transition duration-300" onClick={() => navigate("/products")}>
          View All Products
        </button>
      </div>
    </div>
  );
}

export default ProductGrid;

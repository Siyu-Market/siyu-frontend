import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/Usercontext";

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { addToCart } = useUser();

  const getRandomItems = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  
  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

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

  useEffect(() => {
    if (products.length > 0) {
      setRandomProducts(getRandomItems(products, 8));
    }
  }, [products]);

  return (
    <div className="p-8">
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {randomProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-[150px] object-contain cursor-pointer rounded"
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">
                  <Link to={`/product/${product.id}`} className="hover:underline">
                    {truncateText(product.name, 30)}
                  </Link>
                </h3>
                <p className="text-gray-500 text-sm">
                  {truncateText(product.category, 25)}
                </p>
                <p className="text-gray-700 mt-2">
                  {truncateText(product.description, 40)}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-semibold text-black">
                    NGN {product.discounted_price}
                  </span>
                  <span className="text-sm text-gray-500">
                    {product.stock} items available
                  </span>
                </div>
              </div>
              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.discounted_price,
                    image: product.image_url,
                    quantity: 1,
                  })
                }
                className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-500 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-8">
        <button
          className="rounded-[4px] px-[48px] py-[16px] mx-auto bg-black text-white hover:bg-gray-500 transition duration-300"
          onClick={() => navigate("/products")}
        >
          View All Products
        </button>
      </div>
    </div>
  );
}

export default ProductGrid;

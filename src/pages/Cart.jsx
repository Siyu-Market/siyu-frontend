import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import earphone from "../assets/products/earphones_a_1.webp";
import headphone from "../assets/products/headphones_a_1.webp";
import minus from "../assets/icon-minus.svg";
import add from "../assets/icon-plus.svg";
import del from "../assets/icon-delete.svg";
import back from "../assets/icon-back.svg";

const Cart = () => {
  const cartItems = [
    { id: 1, image: earphone, name: "Product A", price: 4500, quantity: 3 },
    { id: 2, image: headphone, name: "Product B", price: 10000, quantity: 1 },
  ];

  const [value, setValue] = useState(() => {
    const savedQuantities = JSON.parse(localStorage.getItem("cartQuantities"));
    return (
      savedQuantities ||
      cartItems.reduce((acc, item) => {
        acc[item.id] = item.quantity;
        return acc;
      }, {})
    );
  });

  useEffect(() => {
    localStorage.setItem("cartQuantities", JSON.stringify(value));
  }, [value]);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * value[item.id],
    0
  );

  const addition = (id) => {
    setValue((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const subtract = (id) => {
    setValue((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  return (
    <div>
      <div className="mx-[119px]">
        <Navbar />
        <div className="container mx-auto py-10">
          <div className="px-6 py-7 bg-gray-200">
            <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">
              Shopping Cart
            </h1>
          </div>
          <div className="bg-white rounded p-4">
            {cartItems.length > 0 ? (
              <div>
                <table className="w-full text-left border-none">
                  <thead>
                    <tr>
                      <th className="border-b py-2">Product</th>
                      <th className="border-b py-2">Price</th>
                      <th className="border-b py-2">Quantity</th>
                      <th className="border-b py-2">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="py-3 flex items-center gap-3 ">
                          <img src={item.image} alt="" className="size-8" />
                          {item.name}
                        </td>
                        <td className="py-3">&#8358;{item.price}</td>
                        <td className="py-3">
                          <div className="flex bg-[#f7f8fd] justify-between p-2 w-24 rounded-lg text-sm">
                            <button onClick={() => subtract(item.id)}>
                              <img src={minus} alt="Decrease" />
                            </button>

                            <h1>{value[item.id]}</h1>

                            <button onClick={() => addition(item.id)}>
                              <img src={add} alt="Increase" />
                            </button>
                          </div>
                        </td>
                        <td className="py-2">
                          &#8358;{item.price * value[item.id]}
                        </td>
                        <td className="py-2">
                          <button>
                            <img src={del} alt="Delete" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-4 justify-between flex text-blue-800">
                  <div>
                    <Link to="/products" className="flex gap-1.5 text-sm ">
                      <img src={back} alt="Go back" className="size-5" />
                      <p> Continue Shopping</p>
                    </Link>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">
                      Total: &#8358;{totalPrice}
                    </p>
                    <Link
                      to={{
                        pathname: "/products",
                        state: { cartItems, value, totalPrice },
                      }}
                    >
                      <button className="mt-2 bg-blue-800 text-white px-4 py-2 rounded ">
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

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
      <div className="mx-[16px] sm:mx-[100px]">
        <Navbar />
        <div className="container mx-auto py-10  ">
          <div className="px-0 py-2 bg-gray-200 sm:px-6 sm:py-7">
            <h1 className="pt-2 font-bold mb-4 text-center text-blue-800 text-2xl sm:text-4xl">
              Shopping Cart
            </h1>
          </div>
          <div className="w-screen sm:w-full bg-white rounded p-4">
            {cartItems.length > 0 ? (
              <div>
                <table className="w-11/12 sm:w-full text-left border-none ">
                  <thead>
                    <tr>
                      <th className="border-b py-2 text-sm sm:text-base">
                        Product
                      </th>
                      <th className="border-b py-2 text-sm sm:text-base hidden sm:block">
                        Price
                      </th>
                      <th className="border-b py-2 text-sm sm:text-base">
                        Quantity
                      </th>
                      <th className="border-b py-2 text-sm sm:text-base">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="py-3 flex items-center text-sm sm:text-base">
                          <img
                            src={item.image}
                            alt=""
                            className="size-6 sm:size-8 mr-2 "
                          />
                          {item.name}
                        </td>
                        <td className="py-3 text-xs sm:text-base hidden sm:table-cell">
                          &#8358;{item.price}
                        </td>
                        <td className="py-3">
                          <div className="flex bg-[#f7f8fd] justify-between p-1 sm:p-2 w-14 sm:w-24 rounded-lg text-sm">
                            <button onClick={() => subtract(item.id)}>
                              <img
                                src={minus}
                                alt="Decrease"
                                className="w-2 sm:w-4"
                              />
                            </button>

                            <h1 className="text-xs sm:text-base">
                              {value[item.id]}
                            </h1>

                            <button onClick={() => addition(item.id)}>
                              <img
                                src={add}
                                alt="Increase"
                                className="w-2 sm:w-4"
                              />
                            </button>
                          </div>
                        </td>
                        <td className="py-2 text-sm sm:text-base">
                          &#8358;{item.price * value[item.id]}
                        </td>
                        <td className="py-2">
                          <button>
                            <img
                              src={del}
                              alt="Delete"
                              className="size-3 sm:size-4"
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="text-right mt-4 mr-8 sm:mr-0 justify-between flex text-blue-800">
                  <Link to="/products">
                    <div className="hidden sm:flex gap-1.5 text-sm ">
                      <img src={back} alt="Go back" className="size-5" />
                      <p> Continue Shopping</p>
                    </div>
                  </Link>
                  <div className="">
                    <p className="text-base sm:text-lg font-semibold">
                      Total: &#8358;{totalPrice}
                    </p>
                    <Link
                      to={{
                        pathname: "/products",
                        state: { cartItems, value, totalPrice },
                      }}
                    >
                      <button className="mt-2 bg-blue-800 text-white px-4 py-2 rounded text-sm sm:text-base ">
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

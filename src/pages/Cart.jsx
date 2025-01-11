import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/Usercontext";
import minus from "../assets/icon-minus.svg";
import add from "../assets/icon-plus.svg";
import del from "../assets/icon-delete.svg";
import back from "../assets/icon-back.svg";

const Cart = () => {
  const { cart, setCart, removeFromCart } = useUser();
  const [quantities, setQuantities] = useState(() => {
    return cart.reduce((acc, item) => {
      acc[item.id] = item.quantity || 1;
      return acc;
    }, {});
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setQuantities((prev) => {
      const updatedQuantities = { ...prev };
      cart.forEach((item) => {
        if (!updatedQuantities[item.id]) {
          updatedQuantities[item.id] = item.quantity || 1;
        }
      });
      return updatedQuantities;
    });
  }, [cart]);

  useEffect(() => {
    const updatedCart = cart.map((item) => ({
      ...item,
      quantity: quantities[item.id] || 1,
    }));
    if (JSON.stringify(updatedCart) !== JSON.stringify(cart)) {
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }, [quantities, setCart]);

  const handleIncrease = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  const handleRemove = (id) => {
    removeFromCart(id);
    setQuantities((prev) => {
      const { [id]: _, ...remaining } = prev;
      return remaining;
    });
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (quantities[item.id] || 1),
    0
  );

  const formatPrice = (price) => {
    return new Intl.NumberFormat().format(price);
  };

  const handleCheckout = () => {
    // Checkout logic
  };

  return (
    <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="py-10">
          <div className="py-5 w-full bg-blue-800">
            <h1 className="text-4xl font-bold mb-4 text-center text-white">
              Shopping Cart
            </h1>
          </div>
          <div className="bg-white rounded p-4">
            {cart.length > 0 ? (
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-none">
                    <thead>
                      <tr>
                        <th className="border-b py-2">Product</th>
                        <th className="border-b py-2">Price</th>
                        <th className="border-b py-2">Quantity</th>
                        <th className="border-b py-2">Subtotal</th>
                        <th className="border-b py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item.id}>
                          <td className="py-3 flex items-center gap-3">
                            <img
                              src={item.image || ""}
                              alt={item.name}
                              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                            />
                            {item.name}
                          </td>
                          <td className="py-3">&#8358;{item.price}</td>
                          <td className="py-3">
                            <div className="flex bg-[#f7f8fd] justify-between p-2 w-24 rounded-lg text-sm">
                              <button onClick={() => handleDecrease(item.id)}>
                                <img src={minus} alt="Decrease" />
                              </button>
                              <h1>{quantities[item.id]}</h1>
                              <button onClick={() => handleIncrease(item.id)}>
                                <img src={add} alt="Increase" />
                              </button>
                            </div>
                          </td>
                          <td className="py-2">
                            &#8358;{item.price * (quantities[item.id] || 1)}
                          </td>
                          <td className="py-2">
                            <button onClick={() => handleRemove(item.id)}>
                              <img src={del} alt="Delete" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row justify-between text-blue-800 space-y-4 sm:space-y-0">
                  <div>
                    <Link to="/products" className="flex gap-1.5 text-sm">
                      <img src={back} alt="Go back" className="w-5 h-5" />
                      <p>Continue Shopping</p>
                    </Link>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">
                      Total: &#8358;{formatPrice(totalPrice)}
                    </p>
                    <button
                      className="mt-2 bg-blue-800 text-white px-4 py-2 rounded"
                      onClick={() => setShowModal(true)}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.name} <strong>(x{item.quantity})</strong>
                  </span>
                  <span>
                    <strong>NGN {item.price * item.quantity}</strong>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 font-bold text-lg">
              Total: &#8358;{formatPrice(totalPrice)}
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-blue-800 text-white px-4 py-2 rounded"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

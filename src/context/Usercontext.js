import React, { createContext, useContext, useState, useEffect } from 'react';


const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);      
  const [cart, setCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]); 

  
  const login = async ({ email, password }, navigate) => {
    try {
      const response = await fetch('https://siyumarket-backend.vercel.app/users/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
  
      const data = await response.json();
      setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
  
      
      navigate('/');
    } catch (err) {
      throw err; 
    }
  };
  

  const logout = () => {
    setUser(null);
    setCart([]);
    setOrderHistory([]);
    localStorage.removeItem('user');
  };

  
  const placeOrder = () => {
    const order = { id: Date.now(), items: cart, date: new Date().toISOString() };
    setOrderHistory((prevHistory) => [order, ...prevHistory]);
    setCart([]);
  };

  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        cart,
        setCart,
        placeOrder,
        addToCart: (item) => setCart((prev) => [...prev, item]),
        removeFromCart: (itemId) => setCart((prev) => prev.filter((item) => item.id !== itemId)),
        orderHistory,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using UserContext
export const useUser = () => useContext(UserContext);
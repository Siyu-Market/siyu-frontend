import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import AllStores from './pages/AllStores';
import Productpage from './pages/Productpage';
import ProductDetail from './component/ProductDetail';
import Login from './component/Login';
import SignUp from './component/Signup';

function App() {
  return (
    <Router>
      <div className='max-w-[1800px] mx-auto px-4'>
        {/* Navbar is outside the Routes to persist across all pages */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/all-stores" element={<AllStores />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/detail" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

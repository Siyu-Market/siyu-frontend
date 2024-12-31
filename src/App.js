import AllStores from "./pages/AllStores";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Productpage from "./pages/Productpage";
import ProductDetail from "./component/ProductDetail";
import Login from "./component/Login";
import SignUp from "./component/Signup";
import Cart from "./pages/Cart";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Orderhistory from "./pages/Orderhistory";

function App() {
  return (
    <Router>
      <div className="max-w-[1800px] mx-auto px-4 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/all-stores" element={<AllStores />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-history" element={<Orderhistory />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

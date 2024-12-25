import AllStores from './pages/AllStores';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Productpage from './pages/Productpage';
import ProductDetail from './component/ProductDetail';
import Login from './component/Login';
import SignUp from './component/Signup';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/all-stores" element={<AllStores />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/detail" element={<ProductDetail />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

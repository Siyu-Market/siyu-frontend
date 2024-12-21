import AllStores from './pages/AllStores';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Productpage from './pages/Productpage';
import ProductDetail from './component/ProductDetail';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-stores" element={<AllStores />} />
          <Route path="/product-page" element={<Productpage />} />
          <Route path="/detail" element={<ProductDetail />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

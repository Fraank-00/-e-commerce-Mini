import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { getCartCount } from './ultils/cartUtils';

function App() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(getCartCount());
  }, []);

  return (
    <Router>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home setCartCount={setCartCount} />} />
        <Route path="/cart" element={<Cart setCartCount={setCartCount} />} />
      </Routes>
    </Router>
  );
}

export default App;

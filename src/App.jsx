import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Commission from './pages/Commission'
import Socials from './pages/Socials'
import Gallery from './pages/Gallery'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import './App.css'
import './index.css'


const App = () => {
  useEffect(() => {
    document.title = "That Artsy Hippie";
  }, []);
  return (
    <div className="min-h-screen">
      {/* Router for navigation */}
      
      <Router>
        <Navbar />
        
        {/* Page content */}
        <main className="pt-16 px-4">
          {/* Adding top padding to avoid overlapping the navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/commission" element={<Commission />} />
            <Route path="/socials" element={<Socials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<div>404 - Not Found</div>} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};


export default App

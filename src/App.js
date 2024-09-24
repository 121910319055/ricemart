import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AllProducts from './pages/AllProducts';
import Rice from './pages/Rice';
import Cosmetics from './pages/Cosmetics';
import BrandMerchandise from './pages/BrandMerchandise';
import Recipes from './pages/Recipes';
import Blog from './pages/Blog';
import Pages from './pages/Pages';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/Rice" element={<Rice />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/brand-merchandise" element={<BrandMerchandise />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pages" element={<Pages />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import './assets/imports.js';

import Header from './components/Header.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Copyright from './components/copyright.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Clients from './pages/Clients.jsx'
import Team from './pages/Team.jsx'
import Products from './pages/Products.jsx'
// import Contact from './pages/Contact.jsx'

export default function App() {

  return (
    <BrowserRouter>
      <Header></Header>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/team" element={<Team />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Copyright></Copyright>
    </BrowserRouter>
  )

}

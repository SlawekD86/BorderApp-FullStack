import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Home from './components/pages/Home/Home';
import AdPage from './components/pages/AdPage/AdPage';
import AddAds from './components/pages/AddAds/AddAds';
import EditPages from './components/pages/EditPages/EditPages';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ads/:id" element={<AdPage />} />
          <Route path="/add" element={<AddAds />} />
          <Route path="/edit/:id" element={<EditPages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

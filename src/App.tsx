import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Homescreen/Home';
import Contact from './Pages/Contact/Contactscreen/Contact';
import ScrollToTop from "./Function/ScrollToTop";

function App() {
  return (
    <div className="App">
        <Router>
            <ScrollToTop />
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Home" element={<Home />}></Route>
                    <Route path="/Contact" element={<Contact />}></Route>
                    <Route path="*" element={<div>404 Not Found</div>}></Route>
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;

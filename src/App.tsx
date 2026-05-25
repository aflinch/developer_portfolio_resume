import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Pages/Home/AboutMe';
import Home from './Pages/Home/Homescreen';

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Home" element={<Home />}></Route>
                    <Route path="/AboutMe" element={<About />}></Route>
                    <Route path="*" element={<div>404 Not Found</div>}></Route>
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;

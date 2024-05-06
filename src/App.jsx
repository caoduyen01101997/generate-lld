// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './home';
import MyApp from './myApp';
import MyCv from './myCv';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <div className="navbar-left">
              <Link to="/">
                <img src="icon.png" alt="Icon" className="icon" />
              </Link>
            </div>
            <div className="navbar-middle">
              <Link className="mx-4" to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/my-cv">CV</Link>
            </div>
            <div className="navbar-right">
              <Link to="/signin">Sign In</Link>
              <Link to="/signout">Sign Out</Link>
            </div>
          </nav>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<MyApp />} />
              <Route path="/my-cv" element={<MyCv />} />
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;

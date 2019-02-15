import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Parent from "./components/Parent/Parent";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Parent />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

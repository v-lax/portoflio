import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./pages/About/About"
import Projects from "./pages/Projects/Projects"


const App = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Projects}/>
      </div>
      <Footer className="footer"/> 
    </Router>
  );
}

export default App;

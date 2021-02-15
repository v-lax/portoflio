import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from "./About/About";
import Projects from "./Projects/Projects";
import Work from "./Work/Work";
import Education from "./Education/Education";

const Pages = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <About/>
        </Route>
        <Route exact path="/projects">
          <Projects/>
        </Route>
        <Route exact path="/work">
          <Work/>
        </Route>
        <Route exact path="/education">
          <Education/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
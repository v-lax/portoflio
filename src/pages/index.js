import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from "./About/About";
import Projects from "./Projects/Projects";
import Work from "./Work/Work";
import Education from "./Education/Education";
import Writing from "./Writing/Writing";

const Pages = ( { user } ) => {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <About user={user}/>
        </Route>
        <Route exact path="/projects">
          <Projects user={user}/>
        </Route>
        <Route exact path="/work">
          <Work user={user}/>
        </Route>
        <Route exact path="/education">
          <Education user={user}/>
        </Route>
        <Route exact path="/writing">
          <Writing user={user}/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
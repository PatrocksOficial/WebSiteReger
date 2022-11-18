import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import About from './pages/About/About';
import Credits from './pages/Credits/Credits';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Where from './pages/Where/Where';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/service" exact>
          <Services/>
        </Route>
        <Route path="/where" exact>
          <Where/>
        </Route>
        <Route path="/creditos" exact>
          <Credits/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;

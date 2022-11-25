import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import OqueFazemos from './pages/OqueFazemos/OqueFazemos';
import ComoFazemos from './pages/ComoFazemos/ComoFazemos';
import Credits from './pages/Credits/Credits';
import Home from './pages/Home/Home';
import Crescemos from './pages/Crescemos/Crescemos';
import OndeEstamos from './pages/OndeEstamos/OndeEstamos';
import Dicas from './pages/Dicas/Dicas';
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
        <Route path="/OqueFazemos" exact>
          <OqueFazemos/>
        </Route>
        <Route path="/ComoFazemos" exact>
          <ComoFazemos/>
        </Route>
        <Route path="/Crescemos" exact>
          <Crescemos/>
        </Route>
        <Route path="/OndeEstamos" exact>
          <OndeEstamos/>
        </Route>
        <Route path="/Dicas" exact>
          <Dicas/>
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

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import CepSearch from 'pages/ProfileGithub';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/profilegithub">
        <CepSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;

import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Component/NotFound';
import CountryDetails from './Component/CountryDetails';
import ParentComponent from './EventHandling/ParentComponent';
import ConditionalRendering from './Rendering/ConditionalRendering';

function App() {
  return (
    <div className="App">
      <ConditionalRendering></ConditionalRendering>
      <ParentComponent></ParentComponent>
      
    <Router>
      <Switch>
        <Route path="/countries">
          <Header></Header>
        </Route>

        <Route exact path="/">
          <Header></Header>
        </Route>

        <Route path="/country/:countryName">
          <CountryDetails></CountryDetails>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
    </Router>
  
    </div>
  );
}

export default App;

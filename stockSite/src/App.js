import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Sources from './pages/sources';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/about' exact component = {About} />
        <Route path = '/sources' exact component = {Sources} />
      </Switch>
    </Router>
  );
}

export default App;

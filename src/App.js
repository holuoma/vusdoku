import './App.css';
import 'antd/dist/antd.css';
import 'simplebar/dist/simplebar.min.css';
import { Route, BrowserRouter as Router,Switch  } from 'react-router-dom';
import Home from './pages/home'
import Demo1 from './pages/demo1'
import Demo2 from './pages/demo2'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component ={Home} />
        <Route exact path="/demo1" component = {Demo1} />
        <Route exact path="/demo2" component = {Demo2} />
      </Switch>
      </Router>
  );
}

export default App;

import './App.css';
import 'antd/dist/antd.css';
import 'simplebar/dist/simplebar.min.css';
import { Route, BrowserRouter as Router,Switch  } from 'react-router-dom';
import Home from './pages/home'
import Demo1 from './pages/demo1'
import Demo2 from './pages/demo2'
import Demo3 from './pages/demo3'
import NavBar from './components/NavBar'
//import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component ={Home} />
        <Route exact path="/demo1" component = {Demo1} />
        <Route exact path="/demo2" component = {Demo2} />
        <Route exact path="/demo3" component = {Demo3} />
      </Switch>
      <Footer />
      </Router>
  );
}

export default App;

// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/components/pages/Home';
// import NavBar from './components/NavBar';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Welcome from './components/pages/Welcome'
import dotenv from "dotenv";
import Create from './components/pages/Create';
import Forgot from './components/pages/Forgot';
import ResetPassword from './components/pages/ResetPassword';
import Stakes from './components/pages/Stakes';
dotenv.config();
console.log(process.env.REACT_APP_BASEURL);
function App() {
  return (
    <Router>
      {/* <NavBar />       */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Welcome" exact={false} component={Welcome} />
        <Route path="/Create"  component={Create} />
        <Route path="/stakes"  component={Stakes} />
        <Route path="/Forgot" exact component={Forgot} />
        <Route path="/ResetPassword" exact component={ResetPassword}/>
      </Switch>
    </Router>

  );
}

export default App;

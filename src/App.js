import React from 'react';
import './stylesheets/App.css';
import UserDashboard from './components/user-components/user-dashboard';
import IssueCheque from './components/user-components/issueCheque';
import DepositCheque from './components/user-components/depositCheque'
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Header from './components/common-components/header';
import Footer from './components/common-components/footer';
import Login from './components/common-components/login';
import Register from './components/common-components/register';
import {LoginData} from './service/contextApi';

function App() {
  
  return    (
  <BrowserRouter>
  <div>
  <Switch>
    <Route path="/register" component={Register}></Route>
    <LoginData>
    <Route path="/issueCheque" component={IssueCheque}></Route>
    <Route path="/depositCheque" component={DepositCheque}></Route>
    <Route path="/userdashboard" component={UserDashboard}></Route>
    <Route path="/" exact component={Login}></Route>
    </LoginData>
    
  </Switch>
  </div>
</BrowserRouter>
  );
}

export default App;

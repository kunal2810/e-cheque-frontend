import React, { useState } from "react";
import '../../stylesheets/login.css';
import {Link,Redirect,Route,BrowserRouter,Switch, Router,useHistory,useLocation} from "react-router-dom";
import UserDashboard from '../user-components/user-dashboard';

const Login = (props) => {

  let handleLoginClick = (event) => {
    event.preventDefault();
    console.log('click');
    
    
  }

  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
          <form class="login100-form validate-form">
            <span class="login100-form-title p-b-33">
              Account Login
					</span>
            <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input class="input100" type="text" name="email" placeholder="Email" />
              <span class="focus-input100-1"></span>
              <span class="focus-input100-2"></span>
            </div>
            <div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
						<input class="input100" type="password" name="pass" placeholder="Password"/>
						<span class="focus-input100-1"></span>
						<span class="focus-input100-2"></span>
					  </div>
            <div class="container-login100-form-btn m-t-20">
            <button 
            class="login100-form-btn"
            onClick={handleLoginClick}
            >
							Sign in
						</button>
					</div>
          <Route path="/userdashboard" component={UserDashboard}/>
					<div class="text-center p-t-45 p-b-4">
						<span class="txt1">
							Forgot&nbsp;
						</span>

						<a class="txt2 hov1">
							Password
						</a>
					</div>

					<div class="text-center">
						<span class="txt1">
							Create an account?&nbsp;
						</span>

						<a class="txt2 hov1">
            <Link to="/register">
            Sign up
            </Link>
							
						</a>
					</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
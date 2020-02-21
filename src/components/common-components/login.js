import React, { useState , useEffect, useContext } from "react";
import '../../stylesheets/login.css';
import {Link,Redirect,Route,BrowserRouter,Switch, Router,useHistory,useLocation} from "react-router-dom";
import UserDashboard from '../user-components/user-dashboard';
import ApiCalling from '../../service/apicalling';
import {AuthContext} from '../../service/contextApi';

const Login = (props) => {

  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null
  };

  const [data, setData] = React.useState(initialState);

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  var loginStatus = false
  const [loginres, setLoginres] = useState({});
  const { dispatch } = useContext(AuthContext);

  useEffect(()=>{
  }, [loginres])


  let handleLoginClick = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let formObj = {
      "email" : formData.get("email"),
      "password" : formData.get("password")
    }

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    });

    const loginResponse = await ApiCalling.loginUser(formObj);
    if(loginResponse !== undefined){
      setLoginres(loginResponse);
      loginStatus = true

      dispatch({
        type: "LOGIN",
        payload: loginResponse
    })
    
      const {history} = props;
      history.push({
        pathname : "userdashboard",
      })

      
    
    }

    
    
    
    
  }

  return (
    <React.Fragment>
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
          <form class="login100-form validate-form" onSubmit={handleLoginClick}>
            <span class="login100-form-title p-b-33">
              Account Login
					</span>
            <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input class="input100" type="text" name="email" onChange={handleInputChange} value={data.email} placeholder="Email" />
              <span class="focus-input100-1"></span>
              <span class="focus-input100-2"></span>
            </div>
            <div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
						<input class="input100" type="password" name="password" value={data.password} onChange={handleInputChange} placeholder="Password"/>
						<span class="focus-input100-1"></span>
						<span class="focus-input100-2"></span>
					  </div>
            <div class="container-login100-form-btn m-t-20">
            <button
            disabled={data.isSubmitting}
            class="login100-form-btn"
            type="submit"
            >
							Sign in
						</button>
					</div>
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
    </React.Fragment>
  );
};

export default Login;
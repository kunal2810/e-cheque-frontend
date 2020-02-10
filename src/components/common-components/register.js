import React from "react";
import '../../stylesheets/login.css';
import {Link} from "react-router-dom";

const Register = () => {

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
                            Account Register
					    </span>
                    <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input class="input100" type="text" name="name" placeholder="Name" />
                            <span class="focus-input100-1"></span>
                            <span class="focus-input100-2"></span>
                    </div>

                        <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input class="input100" type="text" name="email" placeholder="Email" />
                            <span class="focus-input100-1"></span>
                            <span class="focus-input100-2"></span>
                        </div>

                        <div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input class="input100" type="password" name="password" placeholder="Password" />
                            <span class="focus-input100-1"></span>
                            <span class="focus-input100-2"></span>
                        </div>

                        <div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input class="input100" type="password" name="confirmpassword" placeholder="Confirm Password" />
                            <span class="focus-input100-1"></span>
                            <span class="focus-input100-2"></span>
                        </div>

                        <div class="container-login100-form-btn m-t-20">
                            <button
                                class="login100-form-btn"
                                onClick={handleLoginClick}
                            >

                                Register Now
						</button>
                        </div>

                        <div class="text-center">
                            <span class="txt1">
                                Already Have an Account?&nbsp;
						</span>

                            <a class="txt2 hov1">
                             <Link to="/">
                             login
                             </Link>
                                
						</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
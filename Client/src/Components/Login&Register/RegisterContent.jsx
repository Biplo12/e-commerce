import React from "react";
import { Link } from "react-router-dom";
const LoginContent = () => {
  return (
    <div className="login-register-container">
      <h1>Register</h1>
      <p className="title-description">
        Please register below to create a new account on our <br />
        website.
      </p>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
      </form>
      <button>Log In</button>
      <p>U have an account?</p>
      <Link to="/login">
        <span className="un">Login to account</span>
      </Link>
    </div>
  );
};

export default LoginContent;

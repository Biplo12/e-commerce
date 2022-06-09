import React from "react";
import { Link } from "react-router-dom";
const LoginContent = () => {
  return (
    <div className="login-register-container">
      <h1>Login</h1>
      <p className="title-description">
        Please login below - if you are not registered on our website,
        <br /> please create a new account
      </p>
      <form>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <Link to="/password-reset">
          <span className="un">Forgot password?</span>
        </Link>
      </form>
      <button>Log In</button>
      <p>Don't have an account?</p>
      <Link to="/register">
        <span className="un">Create account</span>
      </Link>
    </div>
  );
};

export default LoginContent;

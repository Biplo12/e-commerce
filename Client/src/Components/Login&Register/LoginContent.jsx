import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/APICalls";
const LoginContent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="login-register-container">
      <h1>Login</h1>
      <p className="title-description">
        Please login below - if you are not registered on our website,
        <br /> please create a new account
      </p>
      <form>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/password-reset">
          <span className="un">Forgot password?</span>
        </Link>
      </form>
      <button onClick={handleLogin} disabled={isFetching}>
        Log In
      </button>
      {error && <h4 className="error">Something went wrong...</h4>}
      <p>Don't have an account?</p>
      <Link to="/register">
        <span className="un">Create account</span>
      </Link>
    </div>
  );
};

export default LoginContent;

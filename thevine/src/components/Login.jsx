import { Link } from "react-router-dom";

export default function Login(props) {
  return (
    <div className="login">
      <div className="login-box">
        <h1> Please Login! </h1>
        <form className="login-form">
          <label>Email:</label>
          <input />
          <br></br>
          <br></br>
          <label>Password:</label>
          <input />
          <br></br>
          <br></br>
        </form>
        <Link to="/home">
          <button
            onClick={() => {
              props.handleLogin();
              props.handleNavLogin();
            }}
          >
            Login
          </button>
        </Link>
        <Link to="/register">
          <button
            onClick={() => {
              props.handleLogin();
              props.handleNavbar();
            }}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

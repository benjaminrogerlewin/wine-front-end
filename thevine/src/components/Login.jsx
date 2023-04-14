import { Link } from "react-router-dom";

export default function Login(props) {
  return (
    <div className="login">
      <div className="login-box">
        <h1 className="login-title"> Please Login! </h1>
        <form className="login-form">
          <label>Email:</label>
          <input id='input' />
          <br></br>
          <br></br>
          <label>Password:</label>
          <input id='input' />
          <br></br>
          <br></br>
        </form>
        <Link to="/home">
          <button
            onClick={() => {
              props.handleLogin();
              props.handleNavLogin();
            }}
            className='login-btn'
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
            className='register-btn'
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

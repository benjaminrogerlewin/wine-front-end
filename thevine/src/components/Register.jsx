import { Link } from "react-router-dom";

export default function Register(props) {
  return (
    <div className="login">
      <div className="register-box">
        <h1 className="register-title"> Please Register! </h1>
        <form className="login-form">
          <label>Username:</label>
          <input id='input'/>
          <br></br>
          <br></br>
          <label>Email:</label>
          <input id='input'/>
          <br></br>
          <br></br>
          <label>Password:</label>
          <input id='input'/>
          <br></br>
          <br></br>
          <label>Confirm Password:</label>
          <input id='input'/>
          <br></br>
          <br></br>
          <label>Location:</label>
          <input id='input'/>
          <br></br>
          <br></br>
        </form>
        <Link to="/">
          <button onClick={() => props.handleRegister()} className='register-btn'>Register</button>
        </Link>
      </div>
    </div>
  );
}

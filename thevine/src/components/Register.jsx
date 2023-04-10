import { Link } from "react-router-dom"

export default function Register(props) {
    return(
        <div className='login'>
            <div className='login-box'>
                <h1> Please Register! </h1>
                <form className='login-form'>
                    <label>Username:</label>
                    <input />
                    <br></br>
                    <br></br>
                    <label>Email:</label>
                    <input />
                    <br></br>
                    <br></br>
                    <label>Password:</label>
                    <input />
                    <br></br>
                    <br></br>
                    <label>Confirm Password:</label>
                    <input />
                    <br></br>
                    <br></br>
                    <label>Location:</label>
                    <input />
                    <br></br>
                    <br></br>
                </form>
                <Link to='/'><button onClick={() => props.handleRegister()}>Register</button></Link>
            </div>
        </div>
    )
}
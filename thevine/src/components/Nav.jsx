import { Link } from "react-router-dom";

export default function Nav(props) {
  const handleSignOut = props.handleSignOut;

  return (
    <div className="nav-bar">
      <div className="home-logo">
        <Link to="/home" className="link">
          <button className="logo-card">
            {/* <img src='https://www.shutterstock.com/image-vector/branch-grape-silhouette-illustration-isolated-600w-2162357061.jpg' className="logo-image"/> */}
            <span className="logo-name">The Vine</span>
          </button>
        </Link>
      </div>
      <div className="nav-btns">
        <Link to="/ratings">
          <button id="btn">My Wines</button>
        </Link>
        <Link to="/wines">
          <button id="btn">Wines</button>
        </Link>
        <Link to="/">
          <button onClick={handleSignOut} className='signout-btn'>Sign Out</button>
        </Link>
      </div>
    </div>
  );
}

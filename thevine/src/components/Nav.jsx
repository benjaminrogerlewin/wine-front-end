import { Link } from "react-router-dom";

export default function Nav(props) {
  const handleSignOut = props.handleSignOut;

  return (
    <div className="nav-bar">
      <div className="home-logo">
        <Link to="/home">
          <button>THE VINE</button>
        </Link>
      </div>
      <div className="nav-btns">
        <Link to="/ratings">
          <button>My Wines</button>
        </Link>
        <Link to="/wines">
          <button>Wines</button>
        </Link>
        <Link to="/">
          <button onClick={handleSignOut}>Sign Out</button>
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Nav(props) {
  const handleSignOut = props.handleSignOut;

  return (
    <div className="nav-bar">
      <Link to="/home">
        <button>THE VINE</button>
      </Link>
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
  );
}

import { Link } from 'react-router-dom'

export default function Nav(props) {
    const handleSignOut = props.handleSignOut;

    return(
        <div className='nav-bar'>
            <Link to='/main'><button>THE VINE</button></Link>
            <Link to='/ratings'><button>My Wines</button></Link>
            <Link to='/type'><button>Wines</button></Link>
            <Link to='/login'><button onClick={handleSignOut}>Sign Out</button></Link>
        </div>
    )
}
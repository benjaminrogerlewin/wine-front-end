import Nav from './Nav'
import Home from './Home'

export default function Main(props) {
    const handleSignOut = props.handleSignOut;

    return(
        <div className='main'>
            <Nav handleSignOut={handleSignOut} />
            <Home />
        </div>
    )
}
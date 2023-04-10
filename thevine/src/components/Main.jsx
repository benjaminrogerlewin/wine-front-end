import Nav from './Nav'
import Home from './Home'

export default function Main(props) {
    const handleSignOut = props.handleSignOut;
    const wineContent = props.wineContent

    return(
        <div className='main'>
            <Nav handleSignOut={handleSignOut} />
            <Home wineContent={wineContent}/>
        </div>
    )
}
export default function Wines(props) {
    return(
        <div className='wine-container'>
                {props.wineContent.map((wine) => (
                    <div className='wine-card'>
                        <img src={wine.image} id='wine-image' />
                        <h1>{wine.producer}</h1>
                    </div>
                ))}
        </div>
    )
}
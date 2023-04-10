export default function Wines(props) {
    return(
        <div className='wine-container'>
                {props.wineContent.map((wine) => (
                    <div className='wine-card'>
                        <h1>{wine.producer}</h1>
                    </div>
                ))}
        </div>
    )
}
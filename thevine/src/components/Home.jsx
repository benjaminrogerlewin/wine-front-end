export default function Home(props) {

    console.log(props.wineContent)

    return(
        <div className='home'>
            <div className='recent-box'>
                <div>
                    <h1>Image</h1>
                </div>
                <div>
                    <h1>Info</h1>
                </div>
            </div>
            <div className='top-box'>
                {props.wineContent.map((wine) => (
                    <div>
                        <h1>{wine.producer}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}
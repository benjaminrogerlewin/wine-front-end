export default function Home(props) {

  return (
    <div className="home">
      <div className="recent-box">
        <div className="recent-card">
          <div className='recent-image'>
            <img src={props.wineContent?.[1]?.image} id="recent-wine-image" />
          </div>
          <div className="recent-info">
            <h1 id='wine-rating'>{props.wineContent?.[1]?.ratings?.[0]?.rating}</h1>
            <h1 id='wine-name'>{props.wineContent?.[1]?.producer}</h1>
            <p></p>
          </div>
        </div>
      </div>
      <div className="top-box">
        {props.wineContent.map((wine) => {
          if (wine.rated === true && wine?.ratings?.[0]?.rating >= 4.0) {
            return (
              <div key={wine.id} className='top-card'>
                <div className='top-image'>
                  <img src={wine.image} id="top-wine-image" />
                </div>
                <div className="top-info">
                  <h1 id='wine-rating'>{wine?.ratings?.[0]?.rating}</h1>
                  <h1 id='wine-name'>{wine.producer}</h1>
                  <p></p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

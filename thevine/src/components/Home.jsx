export default function Home(props) {
  return (
    <div>
      <div className="recent-title">
        <h1>Todays Pick:</h1>
      </div>
      <div className="top-title">
        <h1>Top Rated:</h1>
      </div>
      <div className="home">
        <div className="recent-box">
          <div className="recent-card">
            <div className="recent-image">
              <img src={props.wineContent?.[1]?.image} id="recent-wine-image" />
            </div>
            <div className="todays-info">
              <h1 id="todays-name">{props.wineContent?.[1]?.producer}</h1>
              <p>{props.wineContent?.[1]?.area}</p>
              <p>{props.wineContent?.[1]?.grape}</p>
              <p>{props.wineContent?.[1]?.vintage}</p>
            </div>
          </div>
        </div>
        <div className="top-box">
          <div className="topcard-container">
            {props.wineContent.map((wine) => {
              if (wine.rated === true && wine?.ratings?.[0]?.rating >= 4.0) {
                return (
                  <div key={wine.id} className="top-card">
                    <div className="top-image">
                      <img src={wine.image} id="top-wine-image" />
                    </div>
                    <div className="top-info">
                      <h1 id="wine-rating">{wine?.ratings?.[0]?.rating}</h1>
                      <h1 id="wine-name">{wine.producer}</h1>
                      <p>{wine.area}</p>
                      <p>{wine.grape}</p>
                      <p>{wine.vintage}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

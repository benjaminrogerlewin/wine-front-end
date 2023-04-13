import { useNavigate } from "react-router-dom";

export default function Ratings(props) {
  let navigate = useNavigate()

  const showWine = (wine) => {
    navigate(`${wine.ratings[0]?.id}/${wine.id}`)
  }

  return (
    <div className="ratings-container">
      {props.wineContent.map((wine) => {
        if (wine.rated === true) {
          return (
            <div className="ratings-card" onClick={() => showWine(wine)} key={wine.id}>
              <div>
                <img src={wine.image} id="wine-image" />
              </div>
              <div className="wine-info">
                <h1>{wine.producer}</h1>
                <p>{wine.area}</p>
                <p>{wine.grape}</p>
                <p>{wine.vintage}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

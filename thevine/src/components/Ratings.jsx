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
            <div className="ratings-card" onClick={() => showWine(wine)}>
              <h1>{wine.producer}</h1>
            </div>
          );
        }
      })}
    </div>
  );
}

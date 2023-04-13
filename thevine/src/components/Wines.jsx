import { useNavigate } from "react-router-dom";

export default function Wines(props) {
  let navigate = useNavigate();

  const showWine = (wine) => {
    navigate(`${wine.id}`);
  };

  return (
    <div className="wine-container">
      {props.wineContent.map((wine) => (
        <div className="wine-card" onClick={() => showWine(wine)} key={wine.id}>
          <div>
            <img src={wine.image} id="wine-image" />
          </div>
          <div className="wine-info">
            <h1 id='wine-name'>{wine.producer}</h1>
            <p>{wine.area}</p>
            <p>{wine.grape}</p>
            <p>{wine.vintage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

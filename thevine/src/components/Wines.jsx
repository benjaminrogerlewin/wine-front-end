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
          <img src={wine.image} id="wine-image" />
          <h1>{wine.producer}</h1>
        </div>
      ))}
    </div>
  );
}

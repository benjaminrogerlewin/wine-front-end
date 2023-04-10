export default function Ratings(props) {
  return (
    <div className="ratings-container">
      {props.wineContent.map((wine) => {
        if (wine.rated === true) {
          return (
            <div className="ratings-card">
              <h1>{wine.producer}</h1>
            </div>
          );
        }
      })}
    </div>
  );
}

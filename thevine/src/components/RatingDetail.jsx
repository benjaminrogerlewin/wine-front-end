import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Client from "../services/api";

export default function WineDetail(props) {
  let { rating_id, id } = useParams();
  let navigate = useNavigate();

  const [wine, setWine] = useState("");
  const [formData, setFormData] = useState({
    user_id: 1,
    user_url: 1,
    wine_id: id,
    wine_url: id,
    rating: "",
    review: "",
    taste: "",
    notes: "",
  });

  const updateRated = {
    producer: wine?.producer,
    vintage: wine?.vintage,
    grape: wine?.grape,
    area: wine?.area,
    image: wine?.image,
    rated: false,
    wine_type: wine?.wine_type,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    Client.put(`/ratings/${rating_id}`, formData).then(() => {
      navigate(`/ratings`);
    });
  };

  const deleteRating = () => {
    console.log(rating_id);
    Client.delete(`/ratings/${rating_id}`);
  };

  const handleUpdateRated = () => {
    Client.put(`/wines/${id}`, updateRated);
  };

  const handleDelete = (e) => {
    deleteRating();
    handleUpdateRated();
    navigate(`/ratings`);
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault()
  //   handleSubmit()
  //   handleUpdateRated()
  // }

  useEffect(() => {
    let selectedWine = props.wineContent.find(
      (wine) => wine.id === parseInt(id)
    );
    setWine(selectedWine);
  }, [props.wineContent, id]);

  return (
    <div id="detail">
      <div className="rate-info">
        <img src={wine?.image} id="detail-image" />
        <h1>{wine?.producer}</h1>
        <p id="detail-info-p">{wine?.area}</p>
        <p id="detail-info-p">{wine?.grape}</p>
        <p id="detail-info-p">{wine?.vintage}</p>
        <p id="detail-info-p">rating: {wine?.ratings?.[0]?.rating}</p>
        <p id="detail-info-p">review: {wine?.ratings?.[0]?.review}</p>
        <p id="detail-info-p">taste: {wine?.ratings?.[0]?.taste}</p>
        <p id="detail-info-p">notes: {wine?.ratings?.[0]?.notes}</p>
        <button onClick={() => handleDelete()} id="detail-delete">
          DELETE
        </button>
      </div>
      <div className="rate-area">
        <form onSubmit={handleSubmit}>
          <label htmlFor="rating">RATING</label>
          <br></br> <br></br>
          <input
            required
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="formInput"
            min="0"
            max="5"
            step="0.1"
          />
          /5
          <br></br>
          <br></br>
          <div>
            <label htmlFor="review">REVIEW</label>
          </div>
          <br></br>
          <br></br>
          <textarea
            required
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            className="formTextArea"
          />
          <br></br>
          <br></br>
          <label htmlFor="taste">TASTE</label>
          <br></br>
          <br></br>
          <textarea
            required
            id="taste"
            name="taste"
            value={formData.taste}
            onChange={handleChange}
            className="formTextArea"
          />
          <br></br>
          <br></br>
          <label htmlFor="notes">NOTES</label>
          <br></br>
          <br></br>
          <textarea
            required
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="formTextArea"
          />
          <br></br>
          <br></br>
          <button className="btnLarge" id="btn-create" type="submit">
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
}

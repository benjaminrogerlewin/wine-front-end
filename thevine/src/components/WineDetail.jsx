import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Client from '../services/api'

export default function WineDetail(props) {
  let { user_id, id } = useParams()
  let navigate = useNavigate()

  const [wine, setWine] = useState("")
  const [formData, setFormData] = useState({
    user_id: 1,
    user_url: 1,
    wine_id: id,
    wine_url: id,
    rating: "",
    review: "",
    taste: "",
    notes: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    Client.post(`/ratings`, formData).then(() => {
      navigate(`/home`)
    })
  };

  useEffect(() => {
    let selectedWine = props.wineContent.find(
      (wine) => wine.id === parseInt(id)
    );
    setWine(selectedWine);
  }, [props.wineContent, id]);
  
  return (
    <div className='wine-detail'>
      <div className='wine-area'>
        <h1>{wine?.producer}</h1>
      </div>
      <div className='rate-area'>
        <form onSubmit={handleSubmit}>
        <label htmlFor="rating">
              RATING
            </label>
            <br></br> <br></br>
            <input
              required
              type="float"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>
            <div>
            <label htmlFor="review">
              REVIEW
            </label>
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
            <label htmlFor="taste">
              TASTE
            </label>
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
            <label htmlFor="notes">
              NOTES
            </label>
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
              RATE
            </button>
        </form>
      </div>
    </div>
  );
}

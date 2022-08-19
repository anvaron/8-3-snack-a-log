import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import heartRegular from "../assets/heart-regular.png";
import heartSolid from "../assets/heart-solid.png";

export default function SnackDetails() {
  

  const [snack, setSnack] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        setSnack(res.data.payload);
      })
      .catch((error) => console.log(error));
  }, [id, navigate, API]);

  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleDelete = () => {
    deleteSnack();
  };

  return (
    <>
      <article>
        <h4>
          {snack.name}
          <span>
          {snack.is_healthy 
            ? 
            (<img className="icon" src={heartSolid} alt="healthy food" />) 
            : 
            (<img className="icon" src={heartRegular} alt="unhealthy food" />)
          }
          </span>
        </h4>
        <div>Fiber: {snack.fiber}</div>
        <div>Protein: {snack.protein}</div>
        <div>Added sugar: {snack.added_sugar}</div>
      </article>
      <aside>
      <img className="img" src={snack.image} alt={snack.name} />
      </aside>
        
          <button>
            <Link to={`/snacks`}>Back</Link>
          </button>
          <button onClick={() => handleDelete()}>
            Delete
          </button>
          <button>
            <Link to={`/snacks/${id}/edit`}>Edit Snack</Link>
          </button>
    </>
  );
}
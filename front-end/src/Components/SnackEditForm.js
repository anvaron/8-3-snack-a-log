import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


const API = process.env.REACT_APP_API_URL;

export default function SnackEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    image: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: "",
  });

  const updateSnack = (updatedSnack) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(() => {
          navigate(`/snacks`);
      })
      .catch((error) => console.warn("catch", error));
  };

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then(
        (res) => setSnack(res.data.payload),
        (error) => navigate(`/not-found`)
      );
  }, [id, navigate]);

  // HANDLERS
  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
  };

  const handleClick = () => {
    navigate(`/snacks`);
  };

  const handleSubmit = () => {
    //event.preventDefault();
    updateSnack(snack, id);
  };

  return (
    <div class="p-10 bg-gray-100 items-center ">
      <div class="flex items-center justify-center h-screen">
        <div className="w-6/12 block p-10 bg-white  rounded-lg shadow-lg lg:p-12 lg:col-span-3">
          <form >
          <div class="mt-4 mb-4">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={snack.name}
              onChange={handleTextChange}
              placeholder="Snack's name"
              className=" rounded-lg flex-1 border border-gray-200 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
            </div>
            <div class="mt-4 mb-4">
            <label htmlFor="image">Image: </label>
            <input
              id="image"
              type="text"
              value={snack.image}
              onChange={handleTextChange}
              className=" rounded-lg flex-1 border border-gray-200 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
            </div>
            <div class="mt-4 mb-4 ">
            <label htmlFor="fiber">Fiber:</label>
            <input
              id="fiber"
              type="number"
              value={snack.fiber}
              onChange={handleTextChange}
              className=" rounded-lg flex-1 border border-gray-200 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
            </div>
            <div class="mt-4 mb-4">
            <label htmlFor="protein">Protein:</label>
            <input
              id="protein"
              type="number"
              value={snack.protein}
              onChange={handleTextChange}
              className=" rounded-lg flex-1 border border-gray-200 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
            </div>
            <div class="mt-4 mb-4">
            <label htmlFor="added_sugar">Added Sugar:</label>
            <input
              id="added_sugar"
              type="number"
              value={snack.added_sugar}
              onChange={handleTextChange}
              className=" rounded-lg flex-1 border border-gray-200 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
            </div>
            <div class="mt-4 mb-4">
            <label htmlFor="is_healthy">Healthy:</label>
            <input
              id="is_healthy"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={snack.is_healthy}
            />
            </div>
            <div class="flex items-center mt-10">
                  <button
                    onClick={() => handleClick()}
                    type="button" 
                    class="w-full border-l border-t border-b text-base font-medium rounded-l-md bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 px-4 py-2"
                  >
                    Back
                  </button>
                  
                  <button
                    onClick={() => handleSubmit()}
                    type="button" 
                    class="w-full border-t border-b border-r text-base font-medium rounded-r-md bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200  px-4 py-2"
                  >
                    Submit
                  </button>
                </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
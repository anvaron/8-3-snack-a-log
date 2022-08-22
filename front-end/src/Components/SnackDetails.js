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

  const handleClick = () => {
    navigate(`/snacks`);
  };

  const handleDelete = () => {
    deleteSnack();
  };

  const handleEdit = () => {
    navigate(`/snacks/${id}/edit`);
  };

  return (
    <div class="container text-center ">
      
      <div class="relative bg-white  p-4">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div class="lg:col-start-2 md:pl-20">
            <h2 class="text-3xl mt-10 mb-10 leading-8 font-extrabold text-gray-900 tracking-tight sm:leading-9">
              {snack.name}
            </h2>
            <h4 class="text-xl leading-8 font-extrabold text-gray-900 tracking-tight sm:leading-9">
            <div className="flex-shrink-0 ">
            <div className="container "
            >
            {snack.is_healthy 
              ? 
              <p class="w-48 object-center items-center px-4 py-2  text-base rounded-full text-green-600  bg-green-200">
                Healthy Snack
              </p> 
              : 
              <p class="w-48 object-center items-center px-4 py-2  text-base rounded-full text-red-600 bg-red-200 hover:bg-red-300">
                Unhealthy Snack
              </p>
            }
            </div>
            </div>
            </h4>
            <ul class="mt-10">
              <li>
                <div class="flex">
                    <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-10 w-10 rounded-md bg-blue-400 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                    </div>
                    <div class="ml-4">
                        <h4 class="text-lg leading-10 text-gray-900 font-bold">
                          Fiber: {snack.fiber}g
                        </h4>
                        {/* <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                            Know everything about your business in a single glance with your new dashboard.
                        </p> */}
                    </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-10 w-10 rounded-md bg-blue-400 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                    </div>
                    <div class="ml-4">
                        <h5 class="text-lg leading-10 text-gray-900  font-bold">
                          Protein: {snack.protein}g
                        </h5>
                        {/* <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                            All your orders in one place so you can manage your delivery, collection, asap and pre-orders in one place.
                        </p> */}
                    </div>
                </div>
              </li>
              <li class="mt-10">
                  <div class="flex">
                      <div class="flex-shrink-0">
                          <div class="flex items-center justify-center h-10 w-10 rounded-md bg-blue-400 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          </div>
                      </div>
                      <div class="ml-4">
                          <h5 class="text-lg leading-10 text-gray-900  font-bold">
                            Added sugar: {snack.added_sugar}g
                          </h5>
                          {/* <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                              Never miss a new order with notifications via your dashboard, by sound, and to your email and phone.
                          </p> */}
                      </div>
                  </div>
              </li>
            </ul>
            <div class="flex items-center mt-10">
              <button
                onClick={() => handleClick()}
                type="button" 
                class="w-full border-l border-t border-b text-base font-medium rounded-l-md bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 px-4 py-2"
              >
                Back
              </button>
              <button
                onClick={() => handleDelete()} 
                type="button" 
                class="w-full border text-base font-medium bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 px-4 py-2"
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit()}
                type="button" 
                class="w-full border-t border-b border-r text-base font-medium rounded-r-md bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200  px-4 py-2"
              >
                Edit Snack
              </button>
            </div>
          </div>
          <div class="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
            <div className="flex-shrink-0 absolute top-2 right-2">
            <div className=" flex 
                          items-center 
                          mx-auto justify-center 
                          h-12 
                          w-12 
                          rounded-md 
                          bg-indigo-200 
                          text-white
                          p-2"
            >
            {snack.is_healthy 
              ? 
              (<img className="max-h-40 w-full object-cover" src={heartSolid} alt="healthy food" />) 
              : 
              (<img className="max-h-40 w-full object-cover" src={heartRegular} alt="unhealthy food" />)
            }
            </div>
            </div>
            <img src={snack.image} alt={snack.name} class="relative mx-auto shadow-lg rounded w-full"/>
          </div>
        </div>
    </div>
  </div>


    // <>
    //   <article>
    //     <h4>
    //       {snack.name}
    //       <span>
    //       {snack.is_healthy 
    //         ? 
    //         (<img className="icon" src={heartSolid} alt="healthy food" />) 
    //         : 
    //         (<img className="icon" src={heartRegular} alt="unhealthy food" />)
    //       }
    //       </span>
    //     </h4>
    //     <div>Fiber: {snack.fiber}</div>
    //     <div>Protein: {snack.protein}</div>
    //     <div>Added sugar: {snack.added_sugar}</div>
    //   </article>
    //   <aside>
    //   <img className="img" src={snack.image} alt={snack.name} />
    //   </aside>
        
    //       <button>
    //         <Link to={`/snacks`}>Back</Link>
    //       </button>
    //       <button onClick={() => handleDelete()}>
    //         Delete
    //       </button>
    //       <button>
    //         <Link to={`/snacks/${id}/edit`}>Edit Snack</Link>
    //       </button>
    // </>
  );
}
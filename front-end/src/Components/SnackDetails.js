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
    <div className="container text-center ">
      <div className="relative bg-white  p-4">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="lg:col-start-2 md:pl-20">
            <h2 className="text-6xl mt-10 mb-10 leading-8 font-extrabold text-indigo-900 tracking-tight sm:leading-9">
              {snack.name}
            </h2>
            <h4 className="text-xl leading-8 font-extrabold text-gray-900 tracking-tight sm:leading-9">
              <div className="flex-shrink-0 ">
                <div className="container  my-2">
                {snack.is_healthy 
                  ? 
                  <p className="w-48 mx-auto object-center items-center px-4 py-2  text-base rounded-full text-green-600 bg-green-200">
                    Healthy Snack
                  </p> 
                  : 
                  <p className="w-48 mx-auto object-center items-center px-4 py-2  text-base rounded-full text-red-600 bg-red-200 hover:bg-red-300">
                    Unhealthy Snack
                  </p>
                }
                </div>
              </div>
            </h4>

            <div class="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
              <ul class="flex flex-col divide divide-y">
                <li class="flex flex-row">
                  <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                    <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                      <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2 4v16.002c0 .385.22.735.567.902.346.166.758.119 1.058-.121l4.725-3.781h12.65c.552 0 1-.448 1-1v-12.002c0-.552-.448-1-1-1h-18c-.552 0-1 .448-1 1zm18.5 11.502h-12.677l-4.323 3.46v-14.462h17zm-8.502-6.5c.414 0 .75.336.75.75v3.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75zm.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill-rule="nonzero"/></svg>
                    </div>
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium text-left">
                        Fiber:
                      </div>
                    </div>
                    <div class="text-gray-600 dark:text-gray-200 text-xs">
                      <span className="text-2xl font-bold text-indigo-500">{snack.fiber}g</span>
                    </div>
                  </div>
                </li>
                <li class="flex flex-row">
                  <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                    <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                      <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2 4v16.002c0 .385.22.735.567.902.346.166.758.119 1.058-.121l4.725-3.781h12.65c.552 0 1-.448 1-1v-12.002c0-.552-.448-1-1-1h-18c-.552 0-1 .448-1 1zm18.5 11.502h-12.677l-4.323 3.46v-14.462h17zm-8.502-6.5c.414 0 .75.336.75.75v3.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75zm.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill-rule="nonzero"/></svg>
                    </div>
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium text-left">
                        Protein:
                      </div>
                    </div>
                    <div class="text-gray-600 dark:text-gray-200 text-xs">
                      <span className="text-2xl font-bold text-indigo-500">{snack.protein}g</span>
                    </div>
                  </div>
                </li>
                <li class="flex flex-row">
                  <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                    <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                      <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2 4v16.002c0 .385.22.735.567.902.346.166.758.119 1.058-.121l4.725-3.781h12.65c.552 0 1-.448 1-1v-12.002c0-.552-.448-1-1-1h-18c-.552 0-1 .448-1 1zm18.5 11.502h-12.677l-4.323 3.46v-14.462h17zm-8.502-6.5c.414 0 .75.336.75.75v3.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75zm.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill-rule="nonzero"/></svg>
                    </div>
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium text-left">
                        Added Sugar:
                      </div>
                    </div>
                    <div class="text-gray-600 dark:text-gray-200 text-xs">
                      <span className="text-2xl font-bold text-indigo-500">{snack.added_sugar}g</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center mt-10">
              <button
                onClick={() => handleClick()}
                type="button" 
                className="w-full items-center border-l border-t border-b text-base font-bold rounded-l-md bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 px-4 py-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" fill="bg-white" viewBox="0 0 24 24"><path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z"/></svg>
              </button>
              <button
                onClick={() => handleDelete()} 
                type="button" 
                className="w-full items-center border text-base font-bold bg-red-800 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 px-4 py-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" fill="bg-white" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z"/></svg>
              </button>
              <button
                onClick={() => handleEdit()}
                type="button" 
                className="w-full items-center border-t border-b border-r text-base font-bold rounded-r-md bg-gray-800 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 px-4 py-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" fill="bg-white"  viewBox="0 0 24 24"><path d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z"/></svg>
              </button>
            </div>
          </div>
          <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
            <div className="flex-shrink-0 absolute top-2 right-2 z-50">
            <div className=" flex 
                          items-center 
                          mx-auto justify-center 
                          h-20 
                          w-20 
                          rounded-md 
                          bg-indigo-200 
                          text-white
                          p-4"
            >
            {snack.is_healthy 
              ? 
              (<img className="max-h-40 w-full object-cover" src={heartSolid} alt="healthy food" />) 
              : 
              (<img className="max-h-40 w-full object-cover" src={heartRegular} alt="unhealthy food" />)
            }
            </div>
            </div>
            <img src={snack.image} alt={snack.name} className="relative mx-auto shadow-lg rounded w-full"/>
          </div>
        </div>
    </div>
  </div>
  );
}
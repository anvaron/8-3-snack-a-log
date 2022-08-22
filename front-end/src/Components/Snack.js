import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import heartRegular from "../assets/heart-regular.png";
import heartSolid from "../assets/heart-solid.png";

export default function Snack({ snack }) {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/snacks/${snack.id}`);
  }

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 mb-6 shadow-lg rounded-lg ">
      <h2 className="text-2xl sm:text-xl text-gray-700 font-semibold py-4">
        {snack.name}
      </h2>
      <div className="snack__image relative">
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
        <img className="max-h-40 w-full object-cover" src={snack.image} alt={snack.name} />
      </div>
      <div className="w-full mt-6">
        <button 
          onClick={() => handleClick()}
          type="button" 
          className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
          Snack details 
        </button>
      </div>
    </div>
  );
}
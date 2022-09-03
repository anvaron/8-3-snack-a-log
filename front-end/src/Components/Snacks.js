import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {

  const [snacks, setSnacks] = useState([]);
  
  const getData = async () => {
    await axios
      .get(`${API}/snacks/`)
      .then(({ data }) => setSnacks(data.payload))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full bg-gray-100">
    <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 bg-gray-100">
      {snacks.map((snack) => {
        return <Snack key={snack.id} snack={snack} />;
      })}
    </div>
    </div>
  );
}
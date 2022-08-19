import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;
console.log(API)
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
    <section className="Snacks">
      {snacks.map((snack) => {
        return <Snack key={snack.id} snack={snack} />;
      })}
    </section>
  );
}
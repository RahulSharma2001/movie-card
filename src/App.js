import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies1.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "43a63efb70msh4a77d3947ed878bp15e4b9jsn6cc6f0370345",
      "X-RapidAPI-Host": "imdb-top-100-movies1.p.rapidapi.com",
    },
  };
  async function fetchData() {
    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {data.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Search from "./components/search/Search";
import Slider from "./components/slider/Slider";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="app">
      <Slider data={data} />
      <Search data={data} />
    </div>
  );
}

export default App;

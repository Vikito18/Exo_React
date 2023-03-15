import axios from "axios";
import React, { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);
  return <div></div>;
};

export default Countries;

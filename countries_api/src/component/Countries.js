import axios from "axios";
import React, { useEffect } from "react";

const Countries = () => {
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => console.log(res.data));
  }, []);
  return <div></div>;
};

export default Countries;

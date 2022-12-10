import React from "react";
import { useEffect } from "react";
import ContactUs from "../Contact/Contact";
import Banner from "../Shared/Banner/Banner";

const Home = () => {
  useEffect(() => {
    fetch("http://localhost:5000/allPosts").then((res) =>
      res.json().then(data > console.log(data))
    );
  }, []);
  return (
    <div>
      <Banner></Banner>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;

import React from "react";
import { useEffect } from "react";
import useFirebase from "../../hooks/UseFirebase";
import ContactUs from "../Contact/Contact";
import Banner from "../Shared/Banner/Banner";

const Home = () => {
  const { logOut } = useFirebase();
  useEffect(() => {
    fetch("http://localhost:5000/allPosts")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
    console.log("hello home js");
  }, []);
  return (
    <div>
      <button onClick={() => logOut()}>logout</button>
      <Banner></Banner>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;

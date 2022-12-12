import React from "react";
import { useEffect } from "react";
import useFirebase from "../../hooks/UseFirebase";
import ContactUs from "../Contact/Contact";
import Banner from "../Shared/Banner/Banner";

const Home = () => {
  const { logOut } = useFirebase();

  return (
    <div>
      <button onClick={() => logOut()}>logout</button>
      <Banner></Banner>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;

import React from "react";
import ContactUs from "../Contact/Contact";
import AllPosts from "../AllPosts/AllPosts";
import Banner from "../Shared/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllPosts></AllPosts>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;

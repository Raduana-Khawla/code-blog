import React from "react";
import Blogs from "../Blogs/Blogs";
import ContactUs from "../Contact/Contact";
import Banner from "../Shared/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Blogs></Blogs>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;

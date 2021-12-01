import React from "react";
import Blogs from "../Blogs/Blogs";
import ContactUs from "../Contact/Contact";
import Banner from "../Shared/Banner/Banner";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Blogs></Blogs>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;

import React from "react";
import Typical from "react-typical";
import image1 from "../../../Images/HomeImage/Interface Design.png";
import image2 from "../../../Images/HomeImage/OOP In VBA.png";
import image3 from "../../../Images/HomeImage/Unit Testing.png";

const Banner = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-10 col-sm-10">
          <div className="text-success fs-1 fw-bold text-center">
            <Typical
              steps={[
                "HI! This is Code Bloging Website.",
                1000,
                "Let's learn and grow together",
                500,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
          <p>
            Please check youtube if you want to learn about excel vba.{" "}
            <a href="https://www.youtube.com/channel/UCL-q7_WvISkw0Ox9FRBBzmw">
              YouTube
            </a>
          </p>
          <p>
            Welcome to my website. Please check posts tab if you want to learn
            about excel related things(VBA,Excel formula, Power query, DAX). If
            you want to offer any project then please click on the
            <a href="/contact">Contact Me</a> and get in touch with me.{" "}
          </p>
          <p>
            {" "}
            If you want to post your article on my website then please email me
            about your interest and then we can talk further.
          </p>
          <p>
            If you want to see my work then please check{" "}
            <a href="/exploreProjects">Explore Projects</a>.{" "}
          </p>
          <p>Thanks again for your interest in my website.</p>
          <div className="container w-100 h-75">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={image1} className="w-100 h-50" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={image2} className="w-100 h-50" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={image3} className="w-100 h-50" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import Typical from "react-typical";
import "./Banner.css";

const Banner = () => {
  return (
    <section>
      <div className="text-success fs-1 fw-bold text-center">
        <Typical
          steps={[
            "HI! This is Code Bloging Website.",
            1000,
            "We Are the Best!",
            500,
          ]}
          loop={Infinity}
          wrapper="p"
        />
      </div>
      <p className="container text-danger">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
        eligendi! Aliquam iure vel ad corporis in mollitia adipisci. Nihil optio
        laboriosam delectus itaque adipisci provident ipsam ea a at natus.
        eligendi! Aliquam iure vel ad corporis in mollitia adipisci. Nihil optio
        laboriosam delectus itaque adipisci provident ipsam ea a at natus.
      </p>
      <div className="container w-50 h-50">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
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
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://i.ibb.co/4M5fcq5/maruf-hero.png?fbclid=IwAR1ea4hFC_YLTkH7RYfW6rq8sIW7ayoORFfIQjr5queca2rfzYp4-JqHo1w"
                class="d-block w-100 h-50"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.ibb.co/y6tkMrW/Coding-giphy1.gif"
                class="d-block w-100 h-50"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.ibb.co/1X44F8v/Coding-giphy11.gif"
                class="d-block w-100 h-50"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;

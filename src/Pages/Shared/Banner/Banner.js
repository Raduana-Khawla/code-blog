import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import axios from "axios";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
      .get(`https://radiant-stream-89624.herokuapp.com/allPosts`)
      .then(function (response) {
        // handle success
        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const handleSearchBtn = () => {
    if (searchValue) {
      const result = posts.filter((post) =>
        post.excelBlog.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchResult(result);
      setSearchValue("");
    } else {
      setSearchValue("");
    }
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-7 col-sm-7">
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
            eligendi! Aliquam iure vel ad corporis in mollitia adipisci. Nihil
            optio laboriosam delectus itaque adipisci provident ipsam ea a at
            natus. eligendi! Aliquam iure vel ad corporis in mollitia adipisci.
            Nihil optio laboriosam delectus itaque adipisci provident ipsam ea a
            at natus.
          </p>
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
                  <img
                    src="https://i.ibb.co/4M5fcq5/maruf-hero.png?fbclid=IwAR1ea4hFC_YLTkH7RYfW6rq8sIW7ayoORFfIQjr5queca2rfzYp4-JqHo1w"
                    className="d-block w-100 h-50"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.ibb.co/y6tkMrW/Coding-giphy1.gif"
                    className="d-block w-100 h-50"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://i.ibb.co/1X44F8v/Coding-giphy11.gif"
                    className="d-block w-100 h-50"
                    alt="..."
                  />
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
        <div className="col-md-5 col-sm-5">
          <div>
            <div className="search-container">
              <input
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                placeholder="Search Post"
              />
              <button onClick={handleSearchBtn}>Search</button>
            </div>
            <div>
              {searchResult.map((item) => (
                <h6 className="text-dark">
                  <Link to={`/services/${item._id}`}>{item.date}</Link>
                </h6>
              ))}
            </div>
          </div>
          <br />
          <br />
          <div className="mt-5">
            <h2>Archives</h2>
            <br />
            <h4>Total Posts{posts.length}</h4>
            <br />
            {posts?.map((pd, index) => (
              <h6>
                <Link to={`/services/${pd._id}`}>
                  {index}){pd?.date}..............{pd.length}
                </Link>
              </h6>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

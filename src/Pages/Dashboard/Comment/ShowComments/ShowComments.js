import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "react-rating";
import "./ShowComments.css";

const ShowComments = () => {
  const [showComments, setShowComments] = useState([]);
  //loading data
  useEffect(() => {
    axios
      .get(`http://localhost:5000/getComments`)
      .then(function (response) {
        setShowComments(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      {showComments.map((showComment) => (
        <div className="d-flex">
          <div>
            <img
              src={showComment?.img}
              className="imgStyle"
              alt="green iguana"
            />
          </div>
          <div className="p-3">
            <h2>{showComment?.name}</h2>
            <p>{showComment?.comments}</p>
            <div>
              <span className="style">
                <div className="col-span-9">
                  <Rating
                    initialRating={showComment?.rating}
                    emptySymbol="far fa-star icon-star"
                    fullSymbol="fas fa-star icon-star"
                    readonly
                  ></Rating>
                </div>
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ShowComments;

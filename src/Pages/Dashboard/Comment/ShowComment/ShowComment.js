import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "react-rating";
import "./ShowComment.css";

const ShowComments = ({ data }) => {
  return (
    <div className="d-flex">
      <div>
        <img
          src="https://i.ibb.co/FWQmPZr/pngtree-beautiful-admin-roles-line-vector-icon-png-image-5256998.jpg"
          className="imgStyle"
          alt="green iguana"
        />
      </div>
      <div className="p-3">
        <h2>{data.name}</h2>
        <p>{data.message}</p>
        {data?.replay?.map((replay) => (
          <h1>{replay.message}</h1>
        ))}
        <div>
          <span className="style">
            <div className="col-span-9">
              {/* <Rating
                initialRating={showComment?.rating}
                emptySymbol="far fa-star icon-star"
                fullSymbol="fas fa-star icon-star"
                readonly
              ></Rating> */}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShowComments;

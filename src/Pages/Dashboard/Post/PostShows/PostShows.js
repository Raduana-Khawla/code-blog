import React, { useState, useEffect } from "react";
import UserPost from "../UserPost/UserPost";

const PostShows = () => {
  const [reviews, setReviews] = useState([]);
  //loading data
  useEffect(() => {
    fetch("http://localhost:8000/addReview")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  return (
    <section>
      <div>
        <p>
          We have won numerous awards over the years, but to us it's your
          opinion that really matters
        </p>
        <div className="col col-12">
          {reviews.map((review) => (
            <UserPost key={review.name} review={review}></UserPost>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostShows;

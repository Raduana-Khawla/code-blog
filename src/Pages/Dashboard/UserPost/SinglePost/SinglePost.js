import React from "react";

const UserPost = (props) => {
  const { name, rating, comments, img } = props.post;
  console.log(rating);
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12">
          <div className="">
            <h2>helllo</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPost;

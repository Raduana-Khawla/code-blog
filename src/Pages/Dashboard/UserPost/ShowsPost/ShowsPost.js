import React, { useState, useEffect } from "react";
import SinglePost from "../SinglePost/SinglePost";

const ShowsPost = () => {
  const [posts, setPosts] = useState([]);
  //loading data
  useEffect(() => {
    fetch("http://localhost:5000/addPost")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
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
          {posts.map((post) => (
            <SinglePost key={post.name} post={post}></SinglePost>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowsPost;

import React, { useState, useEffect } from "react";
import SinglePost from "../SinglePost/SinglePost";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  //loading data
  useEffect(() => {
    fetch("https://radiant-stream-89624.herokuapp.com/allPosts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((err) => console.log("all Post ", err));
  }, []);
  // console.log(data);
  return (
    <section>
      <div>
        {/* render Packages from server side */}
        {posts?.map((post) => (
          <SinglePost key={post._id} post={post}></SinglePost>
        ))}
      </div>
    </section>
  );
};

export default AllPosts;

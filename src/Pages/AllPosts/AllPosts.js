import React, { useState, useEffect } from "react";
import SinglePost from "../SinglePost/SinglePost";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  //loading data
  useEffect(() => {
    fetch("http://localhost:5000/allPosts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(data);
  return (
    <section>
      <div>
        {/* render Packages from server side */}
        {posts?.map((post) => (
          <SinglePost key={post.name} post={post}></SinglePost>
        ))}
      </div>
    </section>
  );
};

export default AllPosts;

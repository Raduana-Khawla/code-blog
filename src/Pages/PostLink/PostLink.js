import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostLink.css";
import { Link } from "react-router-dom";

const PostLink = ({ date }) => {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/allPosts`)
      .then(function (response) {
        // handle success
        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [posts]);

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
    <section className="container">
      <div className="row">
        <div className="col-md-10 col-sm-10 mx-3">
          <div>
            <div className=" d-flex search-container">
              <input
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                placeholder="Search Post"
              />
              <button
                className="bg-primary text-light px-3"
                onClick={handleSearchBtn}
              >
                Search
              </button>
            </div>
            <div>
              {searchResult.map((item) => (
                <h6 className="text-dark">
                  <Link to={`/services/${item._id}`}>{date}</Link>
                </h6>
              ))}
            </div>
          </div>
          <br />
          <br />
          <div>
            <h2>
              <u>Posts</u>
            </h2>
            <h4 className="mb-5">
              <u>Total Posts - {posts.length}</u>
            </h4>
            {posts?.map((pd, index) => (
              <h6 className="text-start mx-5">
                <Link to={`/services/${pd._id}`}>
                  {index}){pd?.Title}
                  {pd?.length}
                </Link>
              </h6>
            ))}
          </div>
        </div>
      </div>
      <div></div>
      {/* <div className="mt-5">
        <h5 className="text-start p-3">
          <u>Blog Status</u>
        </h5>{" "}
        <h5 className="text-start p-3 ms-5">
          <u>Archive</u>
        </h5>
        {posts?.map((pd, index) => (
          <h6 className="text-start mx-5">
            <Link to={`/services/${pd._id}`}>
              {index}){pd?.date}
            </Link>
            .........................................................................
            {pd.length}
          </h6>
        ))}
      </div> */}
    </section>
  );
};
export default PostLink;

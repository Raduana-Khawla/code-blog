import React from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const SinglePost = (props) => {
  const { Title, Author, date, _id, excelBlog } = props?.post;

  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-2 col-sm-2">
            <h3 className="text-dark fs-5 fw-bold">Month: {date}</h3>
            <br />
            <br />
            <h3 className="text-dark fs-5 fw-bold">{Author}</h3>
            <h6 className="text-dark">{date}</h6>
            <h6 className="text-dark">{Title}</h6>
            <h6>2 Comments</h6>
            <br />
          </div>
          <div className="col-md-10 col-sm-10">
            {" "}
            {ReactHtmlParser(excelBlog)}{" "}
          </div>
          <div>
            <Link to={`/service/${_id}`}>
              {" "}
              <button className="btn btn-success">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePost;

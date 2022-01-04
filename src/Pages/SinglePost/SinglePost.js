import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import "./SinglePost.css";

const SinglePost = (props) => {
  const { Title, Author, date, _id, excelBlog } = props?.post;

  const htmlFromCMS = `${excelBlog}`;

  const htmlFrom = (htmlString) => {
    const cleanHtmlString = DOMPurify.sanitize(htmlString, {
      USE_PROFILES: { html: true },
    });
    const html = parse(cleanHtmlString);
    return html;
  };
  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-2 col-sm-2 ">
            <h3 className="text-dark fs-6 fw-bold">Month: {date}</h3>
            <br />
            <br />
            <h3 className="text-dark fs-5 fw-bold">{Author}</h3>
            <h6 className="text-dark">{date}</h6>
            <h6 className="text-dark">{Title}</h6>
            <h6>2 Comments</h6>
            <br />
          </div>
          <div
            id="highlighter_168045"
            className="col-md-10 col-sm-10 syntaxhighlighter vb text-start"
          >
            {htmlFromCMS && htmlFrom(htmlFromCMS)}
          </div>
          <div className="mt-3">
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

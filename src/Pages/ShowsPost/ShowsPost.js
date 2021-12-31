import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import Comments from "../Dashboard/Comment/Comments/Comments";

const ShowsPost = (props) => {
  const [comment, setComment] = useState([]);
  const [showDetail, setShowDetail] = useState({ comments: [] });
  const { singlePostId } = useParams();
  console.log(comment);

  useEffect(() => {
    fetch(
      `https://radiant-stream-89624.herokuapp.com/singleService/${singlePostId}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.comments);
        setShowDetail(data);
      })
      .catch((err) => console.log(err));
  }, [singlePostId]);

  useEffect(() => {
    fetch(`http://localhost:5000/comments/${singlePostId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.comments);
        setComment(data);
      })
      .catch((err) => console.log(err));
  }, [comment]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/comments?commentID=" + commentID)
  //     .then((res) => res.json())
  //     .then((data) => setComment(data));
  // }, []);

  const htmlFromCMS = `${showDetail?.excelBlog}`;

  const htmlFrom = (htmlString) => {
    const cleanHtmlString = DOMPurify.sanitize(htmlString, {
      USE_PROFILES: { html: true },
    });
    const html = parse(cleanHtmlString);
    return html;
  };

  return (
    <>
      <div className="my-3 p-2">
        <div className="details-container my-3">
          <div className="row my-5">
            <div className="col-md-4 col-sm-4">
              <div>
                <Comments commentID={singlePostId}></Comments>
              </div>
              <div></div>
            </div>
            <div className="col-md-8 col-sm-8">
              <div className="property1 rounded w-100 h-75">
                <h3 className="text-dark ms-auto fs-5 fw-bold">
                  {showDetail?.Author}
                </h3>
                <h1 className="text-left fs-6">
                  Posted on{showDetail?.date} by Code-Blog
                </h1>
                <hr />
                <p className="text-dark">{showDetail?.Title}</p>
                <div
                  id="highlighter_168045"
                  className="col-md-12 col-sm-12 my-3 syntaxhighlighter vb text-start"
                >
                  {htmlFromCMS && htmlFrom(htmlFromCMS)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowsPost;

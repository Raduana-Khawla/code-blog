import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import Comments from "../../Componrnts/comment/Comments";

const ShowsPost = (props) => {
  const [showDetail, setShowDetail] = useState({ comments: [] });
  const { singlePostId } = useParams();

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

  return (
    <>
      <div className="my-3 p-2">
        <div className="details-container my-3">
          <div className="row my-5">
            <div className="col-md-5 col-sm-5">
              {/* <div>
                {showDetail?.comments?.map((comment) => (
                  <ShowComment data={comment}></ShowComment>
                ))}
              </div>
              <div className="ms-5">
                {" "}
                <ReplyShow></ReplyShow>
              </div> */}
              {/* <div className="mt-5">
                <h2>Comments</h2>
                <Comments></Comments>
              </div> */}

              <div>
                <Comments
                  commentsUrl="http://localhost:3004/comments"
                  currentUserId="1"
                />
              </div>
            </div>
            <div className="col-md-7 col-sm-7">
              <div className="property1 rounded w-100 h-75">
                <h3 className="text-dark ms-auto fs-5 fw-bold">
                  {showDetail?.Author}
                </h3>
                <h1 className="text-left fs-6">
                  Posted on{showDetail?.date} by Code-Blog
                </h1>
                <hr />
                <p className="text-dark">{showDetail?.Title}</p>
                <div className="my-3">
                  {ReactHtmlParser(showDetail?.excelBlog)}
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

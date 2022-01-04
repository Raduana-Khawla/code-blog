import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import "./ShowPost.css";

const ShowsPost = (props) => {
  const [showDetail, setShowDetail] = useState({});
  const { singlePostId } = useParams();
  const { register, handleSubmit } = useForm();
  const [comments, setComments] = useState([]);
  const [isAddComment, setIsAddComment] = useState(false);

  const onSubmit = (data) => {
    data.postId = showDetail._id;
    setIsAddComment(false);
    fetch("https://radiant-stream-89624.herokuapp.com/addcomment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Comment Done!");
        setIsAddComment(true);
      });
  };

  // display comments
  useEffect(() => {
    fetch(`https://radiant-stream-89624.herokuapp.com/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [isAddComment]);

  const findPost = comments.filter(
    (comment) => comment.postId === showDetail._id
  );
  // console.log(findPost);

  useEffect(() => {
    fetch(
      `https://radiant-stream-89624.herokuapp.com/singleService/${singlePostId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setShowDetail(data);
      })
      .catch((err) => console.log(err));
  }, [singlePostId]);

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
          <div className="row my-5 ms-5">
            <div className="col-md-10 col-sm-10">
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
            <div className="col-md-6 col-sm-6">
              <div className="text-start">
                {findPost.map((data) => (
                  <div className="p-3">
                    <div className="d-flex">
                      <div className="mx-3">
                        <img
                          src={data?.img}
                          className="imgStyle"
                          alt="green iguana"
                        />
                      </div>
                      <div>{data?.comments}</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div>
                <AdminReply></AdminReply>
              </div> */}
              <br />
              <div className="bg p-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <textarea
                    className="input-field"
                    name="comments"
                    placeholder="Leave your Comment here"
                    {...register("comments", { required: true })}
                  />
                  <br />
                  <input
                    className="input-field"
                    name="img"
                    placeholder="Your image link"
                    {...register("img", { required: true })}
                  />
                  <br />
                  <input
                    className="submit-btn btn btn-danger mt-3 px-5"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowsPost;

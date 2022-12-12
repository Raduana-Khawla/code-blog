import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import { useForm } from "react-hook-form";
import { Button, Input } from "@mui/material";
import { Grid } from "@mui/material";
import "./ShowPost.css";
import useAuth from "../../hooks/useAuth";

const ShowsPost = (props) => {
  const { singlePostId } = useParams();
  const { register, handleSubmit } = useForm();
  const [images, setImages] = useState([]);

  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isAddImage, setIsAddImage] = useState(false);

  const [showDetail, setShowDetail] = useState({});
  const [comments, setComments] = useState([]);
  const [isAddComment, setIsAddComment] = useState(false);
  console.log(singlePostId);
  const { user } = useAuth();
  // handle upload images
  const imagehandleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    formData.append("postId", showDetail?._id);

    setIsAddImage(false);
    // post images
    fetch("http://localhost:5000/images", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Images added successfully");
          console.log("img added successfully");
          setIsAddImage(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // load images
  console.log(images);
  useEffect(() => {
    fetch("http://localhost:5000/images")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, [isAddImage]);

  const findImage = images.filter((pd) => pd.postId === showDetail._id);
  // add comments
  const onSubmit = (data) => {
    data.postId = showDetail._id;
    setIsAddComment(false);
    fetch("http://localhost:5000/addcomment", {
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
    fetch(`http://localhost:5000/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [isAddComment]);

  const findPost = comments.filter(
    (comment) => comment.postId === showDetail._id
  );
  // console.log(findPost);

  useEffect(() => {
    fetch(`http://localhost:5000/singleService/${singlePostId}`)
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
  const showdate = new Date();
  const dt = showdate.toDateString();

  return (
    <>
      <div className="my-3 p-2">
        <div className="details-container my-3">
          <div className="row my-5 ms-5">
            <div className="col-md-10 col-sm-10">
              {showDetail.Title !== undefined ? (
                <>
                  <div className="property1 rounded w-100 h-75">
                    <h3 className="text-dark ms-auto fs-5 fw-bold">
                      {showDetail?.Author}
                    </h3>
                    <h1 className="text-left fs-6">
                      Posted on{showDetail?.date} by Code-Blog
                    </h1>
                    <hr />
                    <p className="text-dark">
                      {showDetail ? showDetail?.Title : ""}
                    </p>
                    <div
                      id="highlighter_168045"
                      className="col-md-12 col-sm-12 my-3 syntaxhighlighter vb text-start"
                    >
                      {htmlFromCMS && htmlFrom(htmlFromCMS)}
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="text-start">
                {" "}
                <div className="p-3">
                  <div className="row d-flex">
                    {findPost?.map((data, index) => (
                      <div key={index}>
                        <div className="col-md-3 col-sm-3 d-flex">
                          <div className="mx-3">
                            <ul>
                              {user?.photoURL ? (
                                <li className="pic">
                                  <img
                                    className="w-75 h-100 rounded-circle"
                                    src={user?.photoURL}
                                    alt="photo"
                                  />
                                </li>
                              ) : (
                                <li className="pic">
                                  <img
                                    className="w-75 h-100 rounded-circle"
                                    src="https://i.ibb.co/FWQmPZr/pngtree-beautiful-admin-roles-line-vector-icon-png-image-5256998.jpg"
                                    alt="photo"
                                  />
                                </li>
                              )}
                            </ul>
                          </div>
                          <div>
                            <h6>{data?.name}</h6>
                            <h6>{data?.date}</h6>
                          </div>
                        </div>
                        <div className="col-md-7 col-sm-7 mx-5">
                          {data?.comments}
                        </div>
                      </div>
                    ))}{" "}
                    <div className="col-md-7 col-sm-7 mx-5">
                      {findImage.map((pic) => (
                        <Grid item xs={12} sm={6} md={6}>
                          <img
                            style={{ width: "400px", height: "350px" }}
                            src={`data:image/png;base64,${pic?.image}`}
                            alt=""
                          />
                        </Grid>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="bg p-3 col-md-6 col-sm-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <textarea
                    className="form-control bg-light"
                    name="comments"
                    placeholder="Leave your Comment here"
                    {...register("comments", { required: true })}
                  />
                  <br />
                  <br />
                  {user?.email ? (
                    <>
                      <input
                        className="form-control bg-light"
                        placeholder="Email Address *"
                        {...register("email")}
                      />
                      <br />
                      <input
                        className="form-control bg-light"
                        placeholder="Name *"
                        {...register("name")}
                      />
                    </>
                  ) : (
                    <>
                      <input
                        type="email"
                        name="user_email"
                        className="form-control bg-light"
                        placeholder="Email Address *"
                        {...register("email", { required: true })}
                      />
                      <br />
                      <input
                        type="text"
                        name="user_name"
                        className="form-control bg-light"
                        placeholder="Name *"
                        {...register("name", { required: true })}
                      />
                    </>
                  )}
                  <br />
                  <input
                    {...register("date")}
                    placeholder="Date"
                    type="text"
                    // value={dt}
                    // readOnly="true"
                    readOnly={true}
                    defaultValue={dt}
                  />
                  <br />
                  <input
                    className="submit-btn btn btn-danger mt-3 px-5"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
              <br />
              <br />
              <div className="col-md-6 col-sm-6">
                <form onSubmit={imagehandleSubmit}>
                  <div className="text-start">
                    <Input
                      accept="image/*"
                      multiple
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                    <br />
                    <br />
                    <Button variant="contained" type="submit">
                      Add Image
                    </Button>
                  </div>
                </form>
                {success && <p style={{ color: "green" }}>{success}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowsPost;

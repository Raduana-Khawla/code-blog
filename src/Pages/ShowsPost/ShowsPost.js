import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CodeEditor from "../../Componrnts/CodeEditor/CodeEditor";
import "./ShowsPost.css";
import axios from "axios";
import UserComments from "../Dashboard/UserComments/UserComments";

const ShowsPost = (props) => {
  const [CommentLists, setCommentLists] = useState([]);
  const [video, setVideo] = useState([]);
  const [showDetail, setShowDetail] = useState({});
  const { singlePostId } = useParams();
  const { videoId } = useParams();

  const videoVariable = {
    videoId: videoId,
  };

  useEffect(() => {
    fetch(`http://localhost:5000/singleService/${singlePostId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowDetail(data);
        setVideo(data);
      })
      .catch((err) => console.log(err));
  }, [singlePostId]);

  useEffect(() => {
    axios.post("/api/comment/getComments", videoVariable).then((response) => {
      if (response.data.success) {
        console.log("response.data.comments", response.data.comments);
        setCommentLists(response.data.comments);
      } else {
        alert("Failed to get video Info");
      }
    });
  }, []);

  const updateComment = (newComment) => {
    setCommentLists(CommentLists.concat(newComment));
  };

  return (
    <>
      <div className="bg my-3 p-2">
        <div className="details-container my-3">
          <div className="row">
            <div className="col-md-7 col-sm-7 my-5">
              <div className="property1 rounded w-100 h-75">
                <h3 className="text-dark ms-auto fs-5 fw-bold">
                  {showDetail?.name}
                </h3>
                <h1 className="text-left fs-6">
                  Posted on{showDetail?.date} by Code-Blog
                </h1>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  iure ad culpa magni voluptatum modi deleniti vel assumenda a
                  amet quae vero, provident quidem error voluptas illo
                  voluptates. Ut, dolores?
                </p>
                <img className="w-75 h-50" src={showDetail?.img} alt="" />
                <div>
                  <CodeEditor></CodeEditor>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere mollitia totam error perferendis culpa, nostrum laborum
                  voluptas praesentium obcaecati fugit deserunt odit, porro
                  doloribus cum eos, vitae quae veniam! Reprehenderit.
                </p>
                <UserComments
                  CommentLists={CommentLists}
                  postId={video._id}
                  refreshFunction={updateComment}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowsPost;

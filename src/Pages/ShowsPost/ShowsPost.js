import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CodeEditor from "../../Componrnts/CodeEditor/CodeEditor";
import "./ShowsPost.css";

const ShowsPost = (props) => {
  const [showDetail, setShowDetail] = useState({});
  const { singlePostId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/singleService/${singlePostId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowDetail(data);
      })
      .catch((err) => console.log(err));
  }, [singlePostId]);

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowsPost;

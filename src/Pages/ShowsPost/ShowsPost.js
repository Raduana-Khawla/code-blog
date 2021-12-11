import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShowsPost.css";

const ShowsPost = () => {
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
      <h1>Property Details</h1>
      <div className="bg my-3 p-5">
        <div className="details-container my-3 background">
          <div className="row container">
            <div className="col-md-8">
              <div className="card property1 rounded w-75 h-75 p-3 m-5">
                <img className="w-75 h-50" src={showDetail?.img} alt="" />
                <h3>{showDetail?.name}</h3>
                <div className="col-md-12 col-sm-12">
                  <div className="box body line-numbers">
                    <pre>
                      <code className="language-javascript">{`${showDetail?.post}`}</code>
                    </pre>
                  </div>
                </div>
                <h1>{showDetail?.date}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowsPost;

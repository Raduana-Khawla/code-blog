import React from "react";
import { Link } from "react-router-dom";
import "./SinglePost.css";

const SinglePost = (props) => {
  const { email, name, post, date, img, _id } = props?.post;
  console.log(_id);

  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3 col-sm-3">
            <h3 className="text-dark">{name}</h3>
            <h3 className="text-dark">{email}</h3>
            <h6 className="text-dark">{date}</h6>
            <h6>20 Comments</h6>
          </div>
          <div className="col-md-9 col-sm-9">
            <div>
              <img className="w-75 h-50" src={img} alt="" />
            </div>
            <div>
              <div className="col-md-12 col-sm-12">
                <div class="box body line-numbers">
                  <pre>
                    <code class="language-javascript">{`${post}`}</code>
                  </pre>
                </div>
              </div>
            </div>
            <p>
              If you’ve been reading this blog for some time, you’ve probably
              noticed this rather consistent (VBA code written before 2015
              doesn’t count!) pattern in my writing of class modules: whenever I
              need a class,
            </p>
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
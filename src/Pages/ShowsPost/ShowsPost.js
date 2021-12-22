import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import {
  Line,
  LineContent,
  LineNo,
  Pre,
} from "../../Componrnts/CodeEditor/Style/StyledComponent";
import Comments from "../Dashboard/Comment/Comments/Comments";
import ShowComment from "../Dashboard/Comment/ShowComment/ShowComment";
import ReplyShow from "../Dashboard/Comment/ReplyShow/ReplyShow";

const ShowsPost = (props) => {
  const [showDetail, setShowDetail] = useState({ comments: [] });
  const { singlePostId } = useParams();

  const codeString12 = `${showDetail?.post}`.trim();

  useEffect(() => {
    fetch(`http://localhost:5000/singleService/${singlePostId}`)
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
              <div>
                {showDetail?.comments?.map((comment) => (
                  <ShowComment data={comment}></ShowComment>
                ))}
              </div>
              <div className="ms-5">
                {" "}
                <ReplyShow></ReplyShow>
              </div>
              <div className="mt-5">
                <h2>Comments</h2>
                <Comments></Comments>
              </div>
            </div>
            <div className="col-md-7 col-sm-7">
              <div className="property1 rounded w-100 h-75">
                <h3 className="text-dark ms-auto fs-5 fw-bold">
                  {showDetail?.name}
                </h3>
                <h1 className="text-left fs-6">
                  Posted on{showDetail?.date} by Code-Blog
                </h1>
                <hr />
                <p className="text-dark">{showDetail?.paragraph}</p>
                <img className="w-75 h-50" src={showDetail?.img} alt="" />
                <div className="my-3">
                  <Highlight
                    {...defaultProps}
                    theme={theme}
                    code={codeString12}
                    language="js"
                  >
                    {({
                      className,
                      style,
                      tokens,
                      getLineProps,
                      getTokenProps,
                    }) => (
                      <Pre className={className} style={style}>
                        {tokens.map((line, i) => (
                          <Line key={i} {...getLineProps({ line, key: i })}>
                            <LineNo>{i + 1}</LineNo>
                            <LineContent>
                              {line.map((token, key) => (
                                <span
                                  key={key}
                                  {...getTokenProps({ token, key })}
                                />
                              ))}
                            </LineContent>
                          </Line>
                        ))}
                      </Pre>
                    )}
                  </Highlight>
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

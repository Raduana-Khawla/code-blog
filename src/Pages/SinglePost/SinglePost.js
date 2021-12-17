import React from "react";
import { Link } from "react-router-dom";
import "./SinglePost.css";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import {
  Line,
  LineContent,
  LineNo,
  Pre,
} from "../../Componrnts/CodeEditor/Style/StyledComponent";
import CodeEditor from "../../Componrnts/CodeEditor/CodeEditor";

const SinglePost = (props) => {
  const { name, post, date, img, _id } = props?.post;
  console.log(props.post);

  const codeString = `${post}`;
  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3 col-sm-3">
            <h3 className="text-dark fs-5 fw-bold">Month: {date}</h3>
            <br />
            <br />
            <h3 className="text-dark fs-5 fw-bold">{name}</h3>
            <h6 className="text-dark">{date}</h6>
            <h6 className="text-dark">Code-Blog</h6>
            <h6>2 Comments</h6>
          </div>
          <div className="col-md-9 col-sm-9">
            <div>
              <img className="w-75 h-50" src={img} alt="" />
            </div>
            <div>
              <CodeEditor></CodeEditor>
            </div>
            <div>
              <div>
                <Highlight
                  {...defaultProps}
                  theme={theme}
                  code={codeString}
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

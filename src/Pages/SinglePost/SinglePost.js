import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import "./SinglePost.css";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import {
  Line,
  LineContent,
  LineNo,
  Pre,
} from "../../Componrnts/CodeEditor/Style/StyledComponent";

const SinglePost = (props) => {
  const { Title, Author, date, _id, excelBlog } = props?.post;

  const code = () => (
    <Highlight {...defaultProps} theme={theme} code={code} language="vb.net">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );

  const htmlFromCMS = `${excelBlog}`;

  const htmlFrom = (htmlString) => {
    const cleanHtmlString = DOMPurify.sanitize(htmlString, {
      USE_PROFILES: { html: true },
    });
    const html = parse(cleanHtmlString);
    return html;
  };
  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-2 col-sm-2">
            <h3 className="text-dark fs-6 fw-bold">Month: {date}</h3>
            <br />
            <br />
            <h3 className="text-dark fs-5 fw-bold">{Author}</h3>
            <h6 className="text-dark">{date}</h6>
            <h6 className="text-dark">{Title}</h6>
            <h6>2 Comments</h6>
            <br />
          </div>
          <div className="col-md-10 col-sm-10 text-start">
            {htmlFromCMS && htmlFrom(htmlFromCMS)}
            <div>
              <Link to={`/service/${_id}`}>
                {" "}
                <button className="btn btn-success">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePost;

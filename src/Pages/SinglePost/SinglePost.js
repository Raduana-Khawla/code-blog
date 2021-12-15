import React from "react";
import { Link } from "react-router-dom";
import "./SinglePost.css";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

const SinglePost = (props) => {
  const { name, post, date, img, _id } = props?.post;
  console.log(props.post);

  SyntaxHighlighter.registerLanguage("javascript", js);
  const codeString = `import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
  import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
  const Component = () => {
    const codeString = '(num) => num + 1';
    return (
      <SyntaxHighlighter language="javascript" style={dark}>
        {codeString}
      </SyntaxHighlighter>
    );
  };`;

  const codeString1 = `${post}`;

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
              <div className="col-md-12 col-sm-12">
                <div className="box body p-3">
                  <SyntaxHighlighter language="javascript" style={docco}>
                    {codeString1}
                  </SyntaxHighlighter>
                  <SyntaxHighlighter
                    language="javascript"
                    style={docco}
                    className="p-5 line-numbers bg-secondary"
                  >
                    {codeString}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <p>
              If you’ve been reading this blog for some time, you’ve probably
              noticed this rather consistent (VBA code written before 2015
              doesn’t count!) pattern in my writing of class modules: whenever I
              need a class,
            </p>
            <div>
              <p>{post}</p>
              <div>
                <img className="w-75 h-50" src={img} alt="" />
              </div>
            </div>
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

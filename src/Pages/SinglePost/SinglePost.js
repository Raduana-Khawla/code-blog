import React from "react";
import { Link } from "react-router-dom";
import "./SinglePost.css";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

const SinglePost = (props) => {
  const { email, name, post, date, img, _id } = props?.post;
  console.log(_id);
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
                  <SyntaxHighlighter
                    language="javascript"
                    style={docco}
                    // lineProps={{ style: { paddingBottom: 8 } }}
                    // wrapLines={true}
                    // showLineNumbers={true}
                  >
                    {codeString1}
                  </SyntaxHighlighter>
                  <SyntaxHighlighter
                    language="javascript"
                    useInlineStyles={true}
                    startingLineNumber={true}
                    style={docco}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                  {/* <pre>
                    <code class="language-javascript">{`${post}`}</code>
                  </pre> */}
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

import React from "react";
import { Link } from "react-router-dom";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import {
  Line,
  LineContent,
  LineNo,
  Pre,
} from "../../Componrnts/CodeEditor/Style/StyledComponent";

const SinglePost = (props) => {
  const { name, paragraph, post, date, img, _id } = props?.post;

  const codeString12 = `${post}`.trim();
  // const codeString = `import React from 'react';
  // import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';import Home from './pages/Home';
  // import About from './pages/About';
  // import Blog from './pages/Blog';
  // import Contact from './pages/Contact';
  // import Navigation from './component/Navigation';
  // const App = () => {
  //   return (
  //       <Router>
  //         <Navigation/> // here implement your Navbar component like this
  //         <Switch>
  //           <Route exact path='/' component={Home} />
  //           <Route exact path='/about' component={About} />
  //           <Route exact path='/blog' component={Blog} />
  //           <Route exact path='/contact' component={Contact} />
  //         </Switch>
  //       </Router>
  //   );
  // };
  // export default App;`.trim();

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
            <br />
          </div>
          <div className="col-md-9 col-sm-9">
            <p>
              If you’ve been reading this blog for some time, you’ve probably
              noticed this rather consistent (VBA code written before 2015
              doesn’t count!) pattern in my writing of class modules: whenever I
              need a class,
            </p>
            <div>
              <img className="w-50 h-50" src={img} alt="" />
            </div>
            <p>{paragraph}</p>
            <div>
              <div>
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

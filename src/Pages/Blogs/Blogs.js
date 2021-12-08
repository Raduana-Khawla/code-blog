import React from "react";

const Blogs = () => {
  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3 col-sm-3">
            <h3>Private this As TSomething</h3>
            <h6>April 25, 2018</h6>
            <h6>20 Comments</h6>
          </div>
          <div className="col-md-9 col-sm-9">
            <p>
              The author of these words didn’t use the term “anti-pattern” in
              the same way I would have… They didn’t mean it as the toxic coding
              practices I use it for (I know, I asked!). But they aren’t seeing
              the benefits of it, and ultimately consider it clutter… and that’s
              where we disagree, regardless of whether “anti-pattern” is
              incendiary wording or not. I start by declaring a Private Type for
              its private instance fields, always named after the class module
              itself and prefixed with an admittedly rather “Hungarian” T
              prefix; then the only actual private field in the class is a
              Private this variable, like this:
            </p>
            <div>
              <div className="box col-md-12 col-sm-12">
                <div className="body line-numbers">
                  <pre>
                    <code className="language-javascript">{`
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
`}</code>
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
        </div>
      </div>
    </section>
  );
};

export default Blogs;

import React from "react";
import Typical from "react-typical";
import image1 from "../../../Images/HomeImage/Interface Design.png";
import image2 from "../../../Images/HomeImage/OOP In VBA.png";
import image3 from "../../../Images/HomeImage/Unit Testing.png";

const Banner = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-10 col-sm-10">
          <div className="text-success fs-1 fw-bold text-center">
            <Typical
              steps={[
                "HI! This is Code Bloging Website.",
                1000,
                "Let's learn and grow together",
                500,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
          <p>
            Please check youtube if you want to learn about excel vba.{" "}
            <a href="https://www.youtube.com/channel/UCL-q7_WvISkw0Ox9FRBBzmw">
              YouTube
            </a>
          </p>
          <p>
            Welcome to my website. Please check posts tab if you want to learn
            about excel related things(VBA,Excel formula, Power query, DAX). If
            you want to offer any project then please click on the
            <a href="/contact">Contact Me</a> and get in touch with me.{" "}
          </p>
          <p>
            {" "}
            If you want to post your article on my website then please email me
            about your interest and then we can talk further.
          </p>
          <p>
            If you want to see my work then please check{" "}
            <a href="/exploreProjects">Explore Projects</a>.{" "}
          </p>
          <p>Thanks again for your interest in my website.</p>
          <div className="container w-100 h-75">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={image1} className="w-100 h-50" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={image2} className="w-100 h-50" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={image3} className="w-100 h-50" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

// {
//   <table border="0" cellspacing="0" cellpadding="0">
//     <th><caption>ClearFilterFromAllSheet.bas</caption></th>
//     <tbody>
//       <tr>
//         <td class="gutter">
//           <div class="line number1 index0 alt2">1</div>
//           <div class="line number2 index1 alt1">2</div>
//           <div class="line number3 index2 alt2">3</div>
//           <div class="line number4 index3 alt1">4</div>
//           <div class="line number5 index4 alt2">5</div>
//           <div class="line number6 index5 alt1">6</div>
//           <div class="line number7 index6 alt2">7</div>
//           <div class="line number8 index7 alt1">8</div>
//           <div class="line number9 index8 alt2">9</div>
//         </td>
//         <td class="code">
//           <div class="container">
//             <div class="line number1 index0 alt2">
//               <code class="vb plain">Attribute VB_Name =</code>
//               <code class="vb string">"ClearFilterFromAllSheet"</code>
//             </div>
//             <div class="line number2 index1 alt1">
//               <code class="vb keyword">Option Explicit</code>
//             </div>
//             <div class="line number3 index2 alt2">
//               <code class="vb keyword">Public Sub</code>
//               <code class="vb plain">clearAllFilter()</code>
//             </div>
//             <div class="line number4 index3 alt1">
//               <code class="vb spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
//               <code class="vb keyword">Dim</code>
//               <code class="vb plain">ws</code>
//               <code class="vb keyword">As</code>
//               <code class="vb keyword">Worksheet</code>
//             </div>
//             <div class="line number5 index4 alt2">
//               <code class="vb spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
//               <code class="vb keyword">On Error</code>
//               <code class="vb keyword">Resume Next</code>
//             </div>
//             <div class="line number6 index5 alt1">
//               <code class="vb spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
//               <code class="vb keyword">For Each</code>
//               <code class="vb plain">ws</code>
//               <code class="vb keyword">In</code>
//               <code class="vb plain">ThisWorkbook.Worksheets</code>
//             </div>
//             <div class="line number7 index6 alt2">
//               <code class="vb spaces">
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               </code>
//               <code class="vb plain">ws.ShowAllData</code>
//             </div>
//             <div class="line number8 index7 alt1">
//               <code class="vb spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
//               <code class="vb keyword">Next</code>
//               <code class="vb plain">ws</code>
//             </div>
//             <div class="line number9 index8 alt2">
//               <code class="vb keyword">End Sub</code>
//             </div>
//           </div>
//         </td>
//       </tr>
//     </tbody>
//   </table>;

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function ContactUs() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bsfspbc",
        "template_fl7yhi6",
        form.current,
        "user_5vg19LeIk2nF4Y0HIomVF"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Success");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="section-header text-center text-white">
            <h5 className="design2">Contact Me</h5>
            <h1 className="text-danger">Contact With Me</h1>
          </div>
          <div className="col-md-6 py-3">
            <img
              src="https://i.ibb.co/pb0BbXx/contact1.webp"
              className="w-75 h-50"
              alt=""
            />
            <div className="p-3 text-left text-light">
              <h1 className="text-danger">Leave Your Message</h1>
              <h6 className="text-dark">Email: 1997ismail.hosen@gmail.com</h6>
            </div>
            <div className="p-3">
              <a
                href="https://github.com/1504168"
                style={{ textDecoration: "none" }}
                className="text-warning p-3"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.facebook.com/mdismail.hosen.7"
                style={{ textDecoration: "none" }}
                className="text-warning p-3"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/md-ismail-hosen-b77500135/?fbclid=IwAR3Zpx8PIP45ilwSjcKq8KkUYa1RgldeXl-w8ukyqTgZepfHV_BHlNPsLdM"
                style={{ textDecoration: "none" }}
                className="text-warning p-3"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="py-5">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control bg-light"
                    placeholder="Email Address *"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control bg-light"
                    placeholder="Name *"
                  />
                </div>
                <div className="form-group mb-3">
                  <textarea
                    name="message"
                    className="form-control bg-light"
                    cols="30"
                    rows="5"
                    placeholder="Message *"
                  ></textarea>
                </div>
                <div className="form-group text-center">
                  <input
                    type="submit"
                    className="btn d-grid gap-2 col-6 mx-auto btn-danger"
                    value="Send"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

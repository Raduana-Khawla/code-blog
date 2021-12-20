import React, { useState, useEffect } from "react";
import axios from "axios";

const ReplyShow = () => {
  const [showReply, setShowReply] = useState([]);
  //loading data
  useEffect(() => {
    axios
      .get(`http://localhost:5000/getReply`)
      .then(function (response) {
        setShowReply(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      {showReply.map((item) => (
        <div className="d-flex p-3">
          <img
            src="https://i.ibb.co/st6gf8W/img-Of-i-removebg-preview.png"
            className="imgStyle"
            alt=""
          />
          <h2 className="p-3">{item?.reply}</h2>
        </div>
      ))}
    </section>
  );
};

export default ReplyShow;

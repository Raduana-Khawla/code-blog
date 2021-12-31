import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import "./Comments.css";

const Comments = ({ commentID }) => {
  // console.log(comment);
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  // console.log(commentID);

  const onSubmit = (data) => {
    const userComment = { data, commentID };
    console.log(commentID);
    fetch("http://localhost:5000/addcomment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userComment),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Comment Done!");
      });
  };

  return (
    <div className="bg p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="comments"
          placeholder="Leave your Comment here"
          {...register("comments", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="rating"
          placeholder="give Rating on this post"
          {...register("rating", { required: true })}
        />
        <br />
        <input
          className="submit-btn btn btn-danger mt-3 px-5"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};
export default Comments;

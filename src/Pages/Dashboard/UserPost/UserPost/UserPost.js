import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import "./UserPost.css";

const UserPost = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/addPost", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Post Done!");
      });

    console.log(data);
  };

  return (
    <div className="bg my-5">
      <h1>User Post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="name"
          placeholder="enter head-line"
          type="name"
          {...register("name", { required: true })}
        />
        <br />
        <br />
        <input
          className="input-field"
          name="img"
          placeholder="Put Your image"
          {...register("img", { required: true })}
        />
        <br />
        <br />
        <textarea
          className="input-field"
          name="paragraph"
          placeholder="Write......"
          {...register("paragraph", { required: true })}
        />
        <br />
        <br />
        <textarea
          className="input-field"
          name="post"
          placeholder="Posts"
          {...register("post", { required: true })}
        />
        <br />
        <br />
        <input
          className="input-field"
          name="date"
          placeholder="Date"
          {...register("date", { required: true })}
        />
        <br />
        <br />
        <input
          className="submit-btn btn btn-danger mt-3 px-5"
          type="submit"
          value="post"
        />
      </form>
    </div>
  );
};

export default UserPost;

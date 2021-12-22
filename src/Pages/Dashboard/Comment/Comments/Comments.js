import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import "./Comments.css";

const Comments = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  console.log(user);

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/addcomment/61c08fe44c640097c388f51d`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Comment Done!");
      });

    console.log(data);
  };
  return (
    <div className="bg p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="img"
          placeholder="image upload"
          value={user?.photoURL}
          {...register("img", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="name"
          value={user?.displayName}
          type="name"
          {...register("name", { required: true })}
        />
        <br />

        <textarea
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

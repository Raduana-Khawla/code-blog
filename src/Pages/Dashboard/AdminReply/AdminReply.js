import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AdminReply = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/addReply", {
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
      <h1>Post reply</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          placeholder="user comment reply"
          type="reply"
          {...register("reply", { required: true })}
        />
        <br />
        <br />
        <input
          className="submit-btn btn btn-danger mt-3 px-5"
          type="submit"
          value="post"
        />
        <br />
        <br />
      </form>
    </div>
  );
};

export default AdminReply;

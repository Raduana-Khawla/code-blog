import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import "./UserPost.css";

const UserPost = () => {
  const editorRef = useRef(null);
  const { register, handleSubmit } = useForm();
  const { token, admin } = useAuth();

  const onSubmit = (value) => {
    const data = { ...value, userId: admin._id };
    data.excelBlog = editorRef.current.getContent();
    fetch("http://localhost:3000/addPost", {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Post Done!");
      });
  };
  const showdate = new Date();
  // const displaytodaydate =
  //   showdate.getDate() +
  //   "/" +
  //   (showdate.getMonth() + 1) +
  //   "/" +
  //   showdate.getFullYear();
  const dt = showdate.toDateString();

  return (
    <div className="bg my-5">
      <h1>User Post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="input-field w-50"
          name="title"
          placeholder="enter head-line"
          type="name"
          {...register("Title", { required: true })}
        />
        <br />
        <br />
        <input
          {...register("date")}
          placeholder="Date"
          type="text"
          value={dt}
          readOnly={true}
        />
        <br />
        <br />
        <br />
        <br />
        <input
          className="submit-btn btn btn-danger px-5"
          type="submit"
          value="post"
        />
      </form>
      <br />
      <Editor
        apiKey="/3brobpodeqnay7svjrf7eqp15lebr1fseo6216cwt6h90sjl"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          plugins: [
            "codesample advlist autolink lists link image tinydrive charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          codesample_languages: [{ text: "VBA/VB", value: "net" }],
          mobile: {
            plugins:
              "print preview tinydrive powerpaste casechange importcss  searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image media link tinydrive code imagetools mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker textpattern noneditable help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable",
          },
          menubar: "file edit view insert format tools table tc help",
          toolbar:
            "undo redo | bold italic underline insert strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media link pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment",
          autosave_ask_before_unload: true,
          codesample_global_prismjs: true,
          tinydrive_token_provider: "/jwt",
          insert_button_items: "insertfile",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </div>
  );
};

export default UserPost;

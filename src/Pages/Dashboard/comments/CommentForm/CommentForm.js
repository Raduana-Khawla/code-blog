// import { useState } from "react";

// const CommentForm = ({
//   handleSubmit,
//   submitLabel,
//   hasCancelButton = false,
//   handleCancel,
//   initialText = "",
// }) => {
//   const [text, setText] = useState(initialText);
//   const isTextareaDisabled = text.length === 0;

//   //   const onSubmit = (data) => {
//   //     fetch("http://localhost:5000/addPost", {
//   //       method: "POST",
//   //       headers: { "content-type": "application/json" },
//   //       body: JSON.stringify(data),
//   //     })
//   //       .then((res) => res.json())
//   //       .then((result) => {
//   //         alert("Post Done!");
//   //       });

//   //     console.log(data);
//   //   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     handleSubmit(text);
//     setText("");
//   };
//   return (
//     <form onSubmit={onSubmit}>
//       <textarea
//         className="comment-form-textarea"
//         placeholder="Write Comment here"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button className="comment-form-button" disabled={isTextareaDisabled}>
//         {submitLabel}
//       </button>
//       {hasCancelButton && (
//         <button
//           type="button"
//           className="comment-form-button comment-form-cancel-button"
//           onClick={handleCancel}
//         >
//           Cancel
//         </button>
//       )}
//     </form>
//   );
// };

// export default CommentForm;

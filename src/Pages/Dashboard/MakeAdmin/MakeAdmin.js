import { Button, TextField, Alert } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made Admin successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
// import React from "react";
// import { useForm } from "react-hook-form";

// const MakeAdmin = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     fetch("http://localhost:5000/makeAdmin", {
//       method: "PUT",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         if (result.modifiedCount) {
//           alert("Make admin successfully!");
//           console.log(result);
//         }
//       });
//   };
//   return (
//     <div className="bg my-5 p-5">
//       <h1>Make an Admin</h1>
//       <h6>Admin can make an Admin.He\She has the power</h6>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           className="input-field"
//           name="email"
//           placeholder="Email"
//           type="email"
//           {...register("email", { required: true })}
//         />
//         <br />

//         <input
//           className="submit-btn btn btn-danger mt-3"
//           type="submit"
//           value="Make as Admin"
//         />
//       </form>
//     </div>
//   );
// };

// export default MakeAdmin;

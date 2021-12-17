import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ManagePosts = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");
  const [orderId, setOrderId] = useState("");
  const [control, setControl] = useState(false);

  const { register, handleSubmit } = useForm();

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("status update Successfully!");
        console.log(result);
      });
  };
  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [control]);

  // const status = "apporved";
  const handleOrderId = (id) => {
    setOrderId(id);
    // console.log(id);
  };

  const onSubmit = (data) => {
    // console.log(data, orderId);
    fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("status update Successfully!");
        console.log(result);
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Deleted successfully!");
        if (data.deletedCount) {
          setControl(!control);
        }
      });
    console.log(id);
  };
  return (
    <div className="container">
      <h1>All orders {orders.length}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Post Date</th>
            <th>Post Title</th>
            <th>Post description</th>
            <th>Image Link</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.date}</td>
              <td>{pd.name}</td>
              <td>{pd.post}</td>
              <td>{pd.img}</td>
              <td>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <select
                    onClick={() => handleOrderId(pd?._id)}
                    {...register("status")}
                  >
                    <option value={pd?.status}>{pd?.status}</option>
                    <option value="approve">approve</option>
                    <option value="done">Done</option>
                  </select>
                  <input type="submit" />
                </form>
                <input
                  onChange={handleStatus}
                  type="text"
                  defaultValue={pd.status}
                />
              </td>
              <button
                onClick={() => handleDelete(pd?._id)}
                className="btn bg-danger p-2"
              >
                Delete
              </button>

              <button
                onClick={() => handleUpdate(pd._id)}
                className="btn bg-success p-2"
              >
                Update
              </button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManagePosts;

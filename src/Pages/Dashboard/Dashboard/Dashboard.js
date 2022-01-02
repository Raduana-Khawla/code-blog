import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import "./Dashboard.css";
import MakeAdmin from "../../Dashboard/MakeAdmin/MakeAdmin";
import UserPost from "../UserPost/UserPost/UserPost";
import AllPosts from "../../AllPosts/AllPosts";
import ManagePosts from "../ManagePosts/ManagePosts";
import AdminRoute from "../../../Componrnts/Shared/Login/AdminRoute/AdminRoute";
import AdminReply from "../AdminReply/AdminReply";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <div className="dashboard-container">
        <div className="row">
          <div className="col-md-3">
            <div className="dashboard">
              <h5>Dashboard</h5>
              <li className="dashboard-menu mt-5">Post list User</li>
              <Link to={`${url}/userPost`}>
                <li className="dashboard-menu mt-5">UserPost</li>
              </Link>
              {/* {admin && ( */}
              <div className="admin-dashboard">
                <li className="dashboard-menu mt-5">Post list Admin</li>

                <Link to={`${url}/allPosts`}>
                  <li className="dashboard-menu">All Posts</li>
                </Link>
                <Link to={`${url}/managePosts`}>
                  <li className="dashboard-menu">Manage All Orders</li>
                </Link>
                <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
                <Link to={`${url}/adminReply`}>
                  <li className="dashboard-menu">Admin reply</li>
                </Link>
              </div>
              {/* )} */}
            </div>
          </div>
          <div className="col-md-9">
            <h2>Welcome in our website</h2>
            <Switch>
              <AdminRoute exact path={`${path}/userPost`}>
                <UserPost></UserPost>
              </AdminRoute>
              <Route exact path={`${path}/allPosts`}>
                <AllPosts></AllPosts>
              </Route>
              <AdminRoute exact path={`${path}/managePosts`}>
                <ManagePosts></ManagePosts>
              </AdminRoute>
              <AdminRoute exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <Route exact path={`${path}/adminReply`}>
                <AdminReply></AdminReply>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;

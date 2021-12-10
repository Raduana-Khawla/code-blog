import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import "./Dashboard.css";
import MakeAdmin from "../../Dashboard/MakeAdmin/MakeAdmin";
import UserPost from "../UserPost/UserPost/UserPost";
import AllPosts from "../UserPost/AllPosts/AllPosts";
import useAuth from "../../../hooks/useAuth";
import ShowsPost from "../UserPost/ShowsPost/ShowsPost";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user } = useAuth();
  const [isAdmi, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
        if (data[0]) {
          setIsUser(true);
          setIsAdmin(true);
        } else {
          setIsUser(false);
          setIsAdmin(true);
        }
      });
  }, [user?.email]);
  console.log(isAdmi);
  return (
    <div>
      <div className="dashboard-container">
        <div className="row">
          <div className="col-md-3">
            <div className="dashboard">
              <h5>Dashboard</h5>
              <Link to={`${url}/userPost`}>
                <li className="dashboard-menu mt-5">UserPost</li>
              </Link>
              <Link to={`${url}/allPosts`}>
                <li className="dashboard-menu mt-5">AllPosts</li>
              </Link>
              <Link to={`${url}/singlePost/:singlePostId`}>
                <li className="dashboard-menu mt-5">ShowsPost</li>
              </Link>
              {isAdmi && (
                <div className="admin-dashboard">
                  <li className="dashboard-menu mt-5">Orders list Admin</li>

                  <Link to={`${url}/makeAdmin`}>
                    <li className="dashboard-menu">Make Admin</li>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-9">
            <h2>Welcome in our website</h2>
            <Switch>
              <Route exact path={`${path}/userPost`}>
                <UserPost></UserPost>
              </Route>
              <Route exact path={`${path}/allPosts`}>
                <AllPosts></AllPosts>
              </Route>
              <Route exact path={`${path}/singlePost/:singlePostId`}>
                <ShowsPost></ShowsPost>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;

import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import "./Dashboard.css";
import MakeAdmin from "../../Dashboard/MakeAdmin/MakeAdmin";
import UserPost from "../UserPost/UserPost/UserPost";
import useAuth from "../../../hooks/useAuth";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();

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
              {admin && (
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

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AllPosts from "./Pages/AllPosts/AllPosts";
import ContactUs from "./Pages/Contact/Contact";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Login from "./Components/Shared/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ShowsPost from "./Pages/ShowsPost/ShowsPost";
import FileDownloader from "./Pages/DownloadFiles/FileDownloader/FileDownloader";
import AdminRoute from "./Components/Shared/Login/AdminRoute/AdminRoute";
import PostLink from "./Pages/PostLink/PostLink";
import ExploreProjects from "./Pages/ExploreProjects/ExploreProjects";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allPosts">
              <AllPosts></AllPosts>
            </Route>
            <Route path="/postLink">
              <PostLink></PostLink>
            </Route>
            <Route path="/service/:singlePostId">
              <ShowsPost></ShowsPost>
            </Route>
            <Route path="/services/:singlePostId">
              <ShowsPost></ShowsPost>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/exploreProjects">
              <ExploreProjects></ExploreProjects>
            </Route>
            <Route path="/adminRoute">
              <AdminRoute></AdminRoute>
            </Route>
            <Route path="/fileDownloader">
              <FileDownloader></FileDownloader>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <AdminRoute path="/dashboard">
              <Dashboard></Dashboard>
            </AdminRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

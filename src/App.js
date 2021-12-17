import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AllPosts from "./Pages/AllPosts/AllPosts";
import ContactUs from "./Pages/Contact/Contact";
import Attributions from "./Pages/Attributions/Attributions";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivetRoute from "./Componrnts/Shared/PrivetRoute/PrivetRoute";
import Login from "./Componrnts/Shared/Login/Login";
import Register from "./Componrnts/Register/Register";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ShowsPost from "./Pages/ShowsPost/ShowsPost";
import CodeEditor from "./Componrnts/CodeEditor/CodeEditor";

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
            <Route path="/codeEditor">
              <CodeEditor></CodeEditor>
            </Route>
            <Route path="/allPosts">
              <AllPosts></AllPosts>
            </Route>
            <Route path="/service/:singlePostId">
              <ShowsPost></ShowsPost>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/attributions">
              <Attributions></Attributions>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
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

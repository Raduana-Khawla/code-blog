import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import ContactUs from "./Pages/Contact/Contact";
import Attributions from "./Pages/Attributions/Attributions";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivetRoute from "./Componrnts/Shared/PrivetRoute/PrivetRoute";
import Login from "./Componrnts/Shared/Login/Login";
import Register from "./Componrnts/Register/Register";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";

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
            <PrivetRoute path="/blogs">
              <Blogs></Blogs>
            </PrivetRoute>
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

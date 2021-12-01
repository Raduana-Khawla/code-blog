import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import ContactUs from "./Pages/Contact/Contact";
import Attributions from "./Pages/Attributions/Attributions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/attributions" element={<Attributions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

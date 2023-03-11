import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Error from "./pages/Error";
import Contact from "./pages/Contact";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

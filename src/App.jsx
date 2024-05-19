import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/User/Home";
import Books from "./Pages/User/Books";
// import AdminForm from "./Components/AdminForm";
import AdminForm from "../src/Pages/Admin/AdminForm"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />}/>
          <Route path="/admins" element={<AdminForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

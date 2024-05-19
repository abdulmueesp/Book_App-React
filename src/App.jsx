import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/User/Home";
import Books from "./Pages/User/Books";
import AdminForm from "../src/Pages/Admin/AdminForm"
import BookContext from "./Context/BookContext";
import AdminBook from "./Pages/Admin/AdminBook";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookContext><Books /></BookContext>}/>
          <Route path="/adminform" element={<BookContext><AdminForm/></BookContext>} />
          <Route path="/adminbooks" element={<BookContext><AdminBook /></BookContext>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

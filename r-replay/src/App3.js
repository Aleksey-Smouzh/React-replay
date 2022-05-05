import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App3.css";

import About3 from "./components_unit3/About3/About3";
import Error from "./components_unit3/Error";

import Header3 from "./components_unit3/Header3/Header3";
import Main3 from "./components_unit3/Main3/Main3";
import UserId3 from "./components_unit3/UserId/UserId3";
import Users3 from "./components_unit3/Users3/Users3";

function App3() {
  return (
    <div className="App3">
      <BrowserRouter>
        <Header3 />
        <Routes>
          <Route exact path="/" element={<Main3 />} />
          <Route exact path="/users" element={<Users3 />} />
          <Route path="/about" element={<About3 />} />
          <Route path="/users/:userName" element={<UserId3 />} />
          <Route path="*" element={<Error />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App3;

import React from "react";
import { Routes, Route } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import Register from "./Register";
import Login from "./Login";

const Display = () => {
  return (
    <div className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-3/4 lg:ml-0">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;

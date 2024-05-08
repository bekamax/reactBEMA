import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Registor from "../pages/registor/Registor";
import Login from "../pages/logIn/Login";
import Profile from "../pages/profile/Profile";
import EditPRofile from "../pages/EditProfile/EditPRofile";
import Addproduct from "../pages/addProduck/Addproduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registor" element={<Registor />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/editProfile" element={<EditPRofile />} />
      <Route path="/addproduct" element={<Addproduct />} />
    </Routes>
  );
};

export default MainRoutes;

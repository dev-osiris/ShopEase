import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import First from "./components/First";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/profile" Component={Profile} />
        <Route path="/components/First" Component={First} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
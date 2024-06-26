import React from "react";

import { Route, Routes } from "react-router-dom";

import RouteRoot from "routes/index";
import RouteHome from "routes/home";
import RouteSession from "routes/session";

const Root = () => {
  // Rendering //

  return (
    <>
      <Routes>
        <Route path="/" element={<RouteRoot />}>
          <Route path="" element={<RouteHome />} />
          <Route path="/session" element={<RouteSession />} />
          <Route path="*" element={<RouteHome />} />
        </Route>
      </Routes>
    </>
  );
};

export default Root;

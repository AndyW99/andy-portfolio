import React from "react";
import HomeDark from "../views/all-home-version/HomeDark";
import HomeRtl from "../views/all-home-version/HomeRtl";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ContextProvider from "../Context/ContextProvider";

const AllRoutes = () => {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomeDark />} />
          <Route path="/home-dark" element={<HomeDark />} />
          <Route path="/home-rtl" element={<HomeRtl />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </>
  );
};

export default AllRoutes;

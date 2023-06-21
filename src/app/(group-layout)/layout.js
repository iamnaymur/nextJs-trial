import Navbar from "@/components/HomePage/Navbar";
import React from "react";

const WithLayout = ({ children }) => {
  return (
    <div className="container mx-auto">
      {" "}
      <Navbar></Navbar>
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default WithLayout;

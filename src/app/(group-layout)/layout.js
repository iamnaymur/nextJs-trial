import Navbar from "@/components/navbar";
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

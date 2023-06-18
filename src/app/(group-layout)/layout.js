import Navbar from "@/components/navbar";
import React from "react";

const WithLayout = ({ children }) => {
    return (
      <div>
        {" "}
        <Navbar></Navbar>
        {children}
        <footer>Footer</footer>
      </div>
    );
};

export default WithLayout;

"use client";

import { useEffect } from "react";

const ProductsError = ({ error, reset }) => {
  useEffect(() => {
    console.error("🚀 ~ file: error.js:6 ~ ProductsError ~ error:", error);
  }, [error]);
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold">
        {error.message || "Something went wrong"}
      </h1>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default ProductsError;

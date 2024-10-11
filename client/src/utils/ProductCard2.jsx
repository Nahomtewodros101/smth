import React, { forwardRef } from "react";
import product2 from "../components/images/Untitled design (6).png";

const ProductCard2 = forwardRef(({ onMouseEnter, onMouseLeave }, ref) => {
  return (
    <div
      ref={ref}
      className="max-w-sm mx-auto bg-white rounded-lg shadow-2xl overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        className="w-full h-48 object-cover"
        src={product2}
        alt="Product"
        id="Product-2"
      />
      <div className="p-5 bg-slate-300">
        <h2 className="text-xl font-bold mb-2">Get Moving</h2>
        <p className="text-gray-700 mb-4 font-semibold">
          A website made for a workout plan app also made by us
        </p>
      </div>
    </div>
  );
});

export default ProductCard2;

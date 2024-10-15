import React, { forwardRef } from "react";
import qa from "../components/images/Untitled design (8).png";

const ProductCard4 = forwardRef(({ onMouseEnter, onMouseLeave }, ref) => {
  return (
    <div
      ref={ref}
      className="max-w-sm mx-auto bg-white rounded-lg shadow-2xl overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        className="w-full h-48 object-cover"
        src={qa}
        alt="Product"
        id="Product-1"
      />
      <div className="p-5 bg-slate-300">
        <h2 className="text-xl font-bold mb-2">Afro addis</h2>
        <p className="text-gray-700 mb-4 font-semibold">
          QA (Quality Assurance) Service for An Event Organizer 
        </p>
      </div>
    </div>
  );
});

export default ProductCard4;

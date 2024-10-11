import React, { forwardRef } from "react";
import product from "../components/images/Untitled design (5).png";

const ProductCard = forwardRef(({ onMouseEnter, onMouseLeave }, ref) => {
  return (
    <div
      ref={ref}
      className="max-w-sm mx-auto bg-white rounded-lg shadow-2xl overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        className="w-full h-48 object-cover"
        src={product}
        alt="Product"
        id="Product-1"
      />
      <div className="p-5 bg-slate-300">
        <h2 className="text-xl font-bold mb-2">DigiGrafikka</h2>
        <p className="text-gray-700 mb-4 font-semibold">
          A website made for an event by a famous art company
        </p>
      </div>
    </div>
  );
});

export default ProductCard;

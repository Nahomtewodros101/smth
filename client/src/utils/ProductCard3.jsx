import React, { forwardRef } from "react";
import green from '../components/images/Untitled design (7).png'

const ProductCard3 = forwardRef(({ onMouseEnter, onMouseLeave }, ref) => {
  return (
    <div
      ref={ref}
      className="max-w-sm mx-auto bg-white rounded-lg shadow-2xl overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        className="w-full h-48 object-cover"
        src={green}
        alt="Product"
        id="Product-1"
      />
      <div className="p-5 bg-slate-300">
        <h2 className="text-xl font-bold mb-2">Green Grillers</h2>
        <p className="text-gray-700 mb-4 font-semibold">
          A website made for an Enviornmental Frendly Diet Company
        </p>
      </div>
    </div>
  );
});

export default ProductCard3;

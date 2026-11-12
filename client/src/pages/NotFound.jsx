import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-[#FAF7F2]">
    <h1 className="font-serif text-7xl text-[#D4AF37] mb-4">404</h1>
    <h2 className="font-serif text-2xl text-[#111] mb-3">Page Not Found</h2>
    <p className="text-gray-500 mb-8">Ye page exist nahi karta bhai.</p>
    <Link to="/" className="bg-[#111] hover:bg-[#D4AF37] hover:text-[#111] text-white px-8 py-3.5 rounded-full font-medium transition">
      Back to Home
    </Link>
  </div>
);

export default NotFound;
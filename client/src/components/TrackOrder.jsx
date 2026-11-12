import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaBox,
  FaTruck,
  FaHome,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaBoxOpen,
  FaArrowLeft,
  FaPhoneAlt,
} from "react-icons/fa";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [isTracked, setIsTracked] = useState(false);

  // Demo data jab user track karega
  const handleTrack = (e) => {
    e.preventDefault();
    if (orderId.trim()) {
      setIsTracked(true);
    }
  };

  // Steps for Visual Timeline
  const steps = [
    { title: "Order Placed", date: "Oct 24, 10:30 AM", icon: <FaBoxOpen />, status: "completed" },
    { title: "Processing", date: "Oct 25, 02:15 PM", icon: <FaBox />, status: "completed" },
    { title: "Shipped", date: "Oct 26, 09:00 AM", icon: <FaTruck />, status: "current" },
    { title: "Out for Delivery", date: "Expected: Oct 28", icon: <FaMapMarkerAlt />, status: "pending" },
    { title: "Delivered", date: "Expected: Oct 28", icon: <FaHome />, status: "pending" },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-20">
      
      {/* ===== HEADER SECTION ===== */}
      <section className="relative bg-[#FAF7F2] text-[#111] overflow-hidden border-b border-amber-400/20 pt-12 md:pt-16 pb-10 md:pb-14">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-400/15 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-wide text-[#111]">
            Track Your <span className="text-amber-500 italic">Order</span>
          </h1>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Enter your order ID to see the current status and location of your furniture.
          </p>

          {/* Search Form */}
          {!isTracked && (
            <form 
              onSubmit={handleTrack}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mt-8"
            >
              <div className="relative flex-1">
                <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter Order ID (e.g. #ORD-12345)"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white border border-gray-200 text-[#111] placeholder-gray-400 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm transition-all text-sm"
                  required
                />
              </div>
              <button 
                type="submit"
                className="bg-[#111] hover:bg-black text-white font-bold px-8 py-4 rounded-full tracking-wider text-sm uppercase transition-all duration-300 shadow-lg whitespace-nowrap"
              >
                Track Now
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ===== TRACKING RESULT SECTION ===== */}
      {isTracked && (
        <section className="max-w-5xl mx-auto px-6 md:px-12 py-12 animate-fade-in-up">
          
          {/* Back button & Order ID */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <button 
              onClick={() => setIsTracked(false)}
              className="text-sm font-semibold text-gray-500 hover:text-amber-600 transition-colors flex items-center gap-2"
            >
              <FaArrowLeft /> Track another order
            </button>
            <div className="bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-bold border border-amber-200">
              Order ID: {orderId}
            </div>
          </div>

          {/* Top Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center text-xl">
                <FaTruck />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Estimated Delivery</p>
                <p className="font-bold text-[#111]">Monday, Oct 28</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center text-xl">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Need Help?</p>
                <p className="font-bold text-[#111]">+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Side: Visual Timeline */}
            <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
              <h2 className="font-serif text-xl font-bold text-[#111] mb-8">Delivery Status</h2>
              
              <div className="relative border-l-2 border-gray-100 ml-4 space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative pl-8">
                    {/* Timeline Dot/Icon */}
                    <span className={`absolute -left-[22px] top-1 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white ${
                      step.status === "completed" ? "bg-green-500 text-white" :
                      step.status === "current" ? "bg-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.5)]" :
                      "bg-gray-200 text-gray-400"
                    }`}>
                      {step.status === "completed" ? <FaCheckCircle className="text-sm"/> : step.icon}
                    </span>

                    {/* Content */}
                    <div>
                      <h3 className={`text-sm font-bold ${step.status === "pending" ? "text-gray-400" : "text-[#111]"}`}>
                        {step.title}
                      </h3>
                      <p className={`text-xs mt-1 ${step.status === "current" ? "text-amber-600 font-semibold" : "text-gray-500"}`}>
                        {step.date}
                      </p>
                      {step.status === "current" && (
                        <p className="text-xs text-gray-500 mt-2 bg-gray-50 p-2 rounded-lg inline-block">
                          Your package has left our Mumbai warehouse.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sticky top-24">
                <h2 className="font-serif text-xl font-bold text-[#111] mb-6">Order Summary</h2>
                
                {/* Product Item */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200" alt="Product" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#111]">Luxury Sofa Set</p>
                    <p className="text-xs text-gray-500 mt-1">Qty: 1</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#111]">₹45,000</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600 pt-3 border-t border-gray-100">
                    <span className="font-bold text-[#111]">Total</span>
                    <span className="font-bold text-[#111]">₹45,000</span>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-[#FAF7F2] p-4 rounded-xl">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">Shipping To</p>
                  <p className="text-sm font-bold text-[#111]">Rahul Sharma</p>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">123, Bandra West,<br/>Mumbai, Maharashtra 400050</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ===== CTA BACK TO HOME ===== */}
      {!isTracked && (
        <section className="max-w-7xl mx-auto px-6 text-center mt-6">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 bg-[#111] hover:bg-black text-white px-8 py-3.5 rounded-full font-bold tracking-wider text-sm uppercase transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            <FaHome className="group-hover:text-amber-400 transition-colors" /> Back to Home
          </Link>
        </section>
      )}

    </div>
  );
};

export default TrackOrder;
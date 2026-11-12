import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { FaCheckCircle, FaTruck, FaShieldAlt, FaArrowRight } from "react-icons/fa";

const Sofa = () => {
  // Sirf Sofa category ke products filter karo
  const sofaProducts = products.filter((p) => p.category === "Sofa");

  const features = [
    { icon: <FaCheckCircle />, text: "Premium Upholstery" },
    { icon: <FaShieldAlt />, text: "5-Year Warranty" },
    { icon: <FaTruck />, text: "Free Delivery" },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      
      {/* ═══════════════════════════════════════ */}
      {/* HERO SECTION (Balanced Height) */}
      {/* ═══════════════════════════════════════ */}
      {/* Mobile: 400px, Tablet: 500px, Desktop: 550px (Ekdum perfect) */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600"
          alt="Premium Sofas"
          className="absolute inset-0 w-full h-full object-cover" 
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111]/90 via-[#111]/60 to-transparent"></div>

        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4 bg-amber-400/20 border border-amber-400/50 backdrop-blur-md px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-amber-400 text-xs tracking-[0.2em] uppercase font-bold">Living Room</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white leading-[1.1] mb-5">
              Sink Into <br />
              <span className="text-amber-400">Luxury & Comfort</span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Handcrafted sofas designed for deep relaxation. From classic leather to modern sectionals, find the perfect centerpiece for your home.
            </p>

            {/* Features List */}
            <div className="flex flex-wrap gap-4 md:gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-white text-xs md:text-sm">
                  <span className="text-amber-400 text-lg">{f.icon}</span>
                  <span className="tracking-wider">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* BAQI CODE SAME RAHEGA (Products Grid & CTA) */}
      {/* ═══════════════════════════════════════ */}
      
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b border-gray-200 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[1px] w-10 bg-amber-400"></div>
              <span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-semibold">
                Our Collection
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#111]">
              Premium Sofas ({sofaProducts.length})
            </h2>
          </div>
          
          <Link 
            to="/shop" 
            className="text-sm font-semibold tracking-wider text-[#111] hover:text-amber-500 transition-colors flex items-center gap-2 group"
          >
            View All Furniture
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sofaProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-[#111] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[100px]"></div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Can't Find the Perfect Fit?
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-8 max-w-xl mx-auto">
            We build custom sofas tailored to your exact room dimensions, fabric preferences, and comfort level.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black px-8 py-3.5 rounded-full font-bold tracking-wider text-sm uppercase transition-all duration-300"
          >
            Book Free Consultation
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Sofa;
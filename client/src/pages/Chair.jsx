import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { FaCheckCircle, FaTruck, FaShieldAlt, FaArrowRight, FaCouch } from "react-icons/fa";

const Chair = () => {
  // Sirf Chair category ke products filter karo
  const chairProducts = products.filter((p) => p.category === "Chair");

  const features = [
    { icon: <FaCheckCircle />, text: "Ergonomic Support" },
    { icon: <FaShieldAlt />, text: "Premium Build" },
    { icon: <FaTruck />, text: "Fast Delivery" },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      
      {/* ═══════════════════════════════════════ */}
      {/* HERO SECTION (Responsive Height & Text) */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1600"
          alt="Premium Chairs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111]/95 via-[#111]/70 to-transparent md:bg-gradient-to-r md:from-[#111]/90 md:via-[#111]/60 md:to-transparent"></div>

        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex flex-col justify-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4 bg-amber-400/20 border border-amber-400/50 backdrop-blur-md px-3 md:px-4 py-1 md:py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-amber-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">Seating</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white leading-[1.15] md:leading-[1.1] mb-3 md:mb-5">
              Sit Back & <br />
              <span className="text-amber-400">Relax in Style</span>
            </h1>
            
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-md">
              From ergonomic office chairs to luxurious accent pieces, discover seating that combines comfort, craftsmanship, and timeless design.
            </p>

            {/* Features List (Mobile pe 2 columns) */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 md:gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-white text-[11px] md:text-sm">
                  <span className="text-amber-400 text-sm md:text-lg">{f.icon}</span>
                  <span className="tracking-wider">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* PRODUCTS GRID (Responsive Spacing) */}
      {/* ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-12 md:py-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10 border-b border-gray-200 pb-4 md:pb-6">
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-2">
              <div className="h-[1px] w-8 md:w-10 bg-amber-400"></div>
              <span className="text-amber-500 text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold">
                Our Collection
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#111]">
              Premium Chairs ({chairProducts.length})
            </h2>
          </div>
          
          <Link 
            to="/shop" 
            className="text-xs md:text-sm font-semibold tracking-wider text-[#111] hover:text-amber-500 transition-colors flex items-center gap-1 md:gap-2 group"
          >
            View All Furniture
            <FaArrowRight className="text-[10px] md:text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {chairProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* CUSTOM DESIGN CTA BANNER */}
      {/* ═══════════════════════════════════════ */}
      <section className="bg-[#111] text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-400/10 rounded-full blur-[80px] md:blur-[100px]"></div>
        
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 text-center relative z-10">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
            Need Bulk Seating for Your Cafe or Office?
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto">
            We offer special B2B pricing and custom upholstery options for commercial spaces, cafes, and corporate offices.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-amber-400 hover:bg-amber-300 text-black px-6 md:px-8 py-3 md:py-3.5 rounded-full font-bold tracking-wider text-xs md:text-sm uppercase transition-all duration-300"
          >
            Get a Quote
            <FaArrowRight className="text-[10px] md:text-xs" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Chair;
import React, { useRef } from "react";
import {
  FaInstagram,
  FaArrowRight,
  FaArrowLeft,
  FaHeart,
} from "react-icons/fa";

const InstagramLookbook = () => {
  const scrollRef = useRef(null);

  // Scroll functions (Left/Right Arrow ke liye)
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Instagram Posts Data
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800",
      handle: "@sharmaandsons",
      date: "Apr 28, 2026",
      likes: "1.2k",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800",
      handle: "@priya.designs",
      date: "May 02, 2026",
      likes: "856",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
      handle: "@home_decor_rahul",
      date: "May 15, 2026",
      likes: "2.1k",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
      handle: "@sneha_interiors",
      date: "Jun 10, 2026",
      likes: "932",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800",
      handle: "@thevermafamily",
      date: "Jun 22, 2026",
      likes: "1.5k",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800",
      handle: "@amit_architects",
      date: "Jul 05, 2026",
      likes: "3.4k",
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-8 md:py-10 overflow-hidden">
      
      {/* ═══════════════════════════════════════ */}
      {/* HEADER SECTION (With AOS) */}
      {/* ═══════════════════════════════════════ */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 mb-6 md:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
        {/* ✅ AOS Fade-Up for Heading */}
        <div data-aos="fade-up">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-[#111] tracking-tight mb-2 md:mb-3">
            #LiveWithSharma
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium tracking-wide">
            Real spaces. Shared stories. Built for life.
          </p>
        </div>

        {/* Desktop Arrows (AOS Fade-Left) */}
        <div data-aos="fade-left" data-aos-delay="200" className="hidden md:flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#111] hover:text-white hover:border-[#111] transition-all duration-300 cursor-pointer"
            aria-label="Scroll Left"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-[#111] hover:text-white hover:border-[#111] transition-all duration-300 cursor-pointer"
            aria-label="Scroll Right"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════ */}
      {/* HORIZONTAL SCROLL CAROUSEL */}
      {/* ═══════════════════════════════════════ */}
      <div className="relative max-w-[1400px] mx-auto">
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-4 sm:px-6 md:px-12 pb-4 md:pb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* CSS for hiding scrollbar in webkit */}
          <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>

          {posts.map((post, index) => (
            <div
              key={post.id}
              // ✅ AOS: Har photo ek ke baad ek zoom-in hokar aayegi
              data-aos="zoom-in-up"
              data-aos-delay={index * 100} // 100ms ka gap har card me
              className="relative w-[240px] sm:w-[280px] md:w-[320px] shrink-0 aspect-[4/5] rounded-2xl overflow-hidden group snap-center cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.handle}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Instagram Icon on Top Right (Hover pe aayega) */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <FaInstagram />
              </div>

              {/* Bottom Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#111] text-[10px]">
                    <FaInstagram />
                  </span>
                  <p className="text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide">
                    {post.handle}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-300 text-[10px] sm:text-xs tracking-wider">
                    {post.date}
                  </p>
                  <p className="text-white text-[10px] sm:text-xs flex items-center gap-1">
                    <FaHeart className="text-amber-400 text-[10px]" /> {post.likes}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Right Arrow (Overlay) */}
        <button
          onClick={() => scroll("right")}
          className="md:hidden absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 bg-white text-black shadow-lg rounded-full flex items-center justify-center z-10 cursor-pointer"
        >
          <FaArrowRight className="text-sm" />
        </button>
      </div>

    </section>
  );
};

export default InstagramLookbook;
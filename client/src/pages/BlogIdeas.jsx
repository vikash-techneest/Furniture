import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBed, FaCouch, FaUtensils, FaBriefcase, FaBath, FaArrowRight, FaPalette } from "react-icons/fa";

const BlogIdeas = () => {
  const [activeRoom, setActiveRoom] = useState("All");

  const rooms = [
    { name: "All", icon: <FaPalette /> },
    { name: "Living Room", icon: <FaCouch /> },
    { name: "Bedroom", icon: <FaBed /> },
    { name: "Kitchen & Dining", icon: <FaUtensils /> },
    { name: "Home Office", icon: <FaBriefcase /> },
    { name: "Bathroom", icon: <FaBath /> },
  ];

  const ideas = [
    {
      id: 1, room: "Living Room", title: "Warm Minimalist Living Room", 
      desc: "Cream walls, oak coffee table, and a plush mustard sofa create calm warmth.",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800",
      palette: ["#FAF3E0", "#E8DCC8", "#D4AF37", "#8B5E3C"], 
      size: "large",
    },
    {
      id: 2, room: "Bedroom", title: "Cozy Scandinavian Bedroom", 
      desc: "White linens, rattan lamp, and soft beige curtains.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
      palette: ["#FFFFFF", "#F5F0E8", "#D4C4A8", "#8B7355"], 
      size: "small",
    },
    {
      id: 3, room: "Kitchen & Dining", title: "Rustic Dining Nook", 
      desc: "Sheesham wood table with linen chairs and a wrought iron chandelier.",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600",
      palette: ["#8B5E3C", "#D4AF37", "#F5F0E8", "#2B2118"], 
      size: "small",
    },
    {
      id: 4, room: "Home Office", title: "Productive Studio Space", 
      desc: "Ergonomic chair, floating shelves, and warm task lighting.",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800",
      palette: ["#F5F5F5", "#D4AF37", "#111111", "#8B7355"], 
      size: "large",
    },
    {
      id: 5, room: "Living Room", title: "Bold Statement Living", 
      desc: "Deep teal sofa, brass accents, and statement art pieces.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
      palette: ["#0B4F6C", "#D4AF37", "#F5F0E8", "#111111"], 
      size: "small",
    },
    {
      id: 6, room: "Bedroom", title: "Luxury Master Retreat", 
      desc: "Tufted headboard, walk-in closet, and a reading corner.",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600",
      palette: ["#111111", "#D4AF37", "#F5F0E8", "#6E4A2E"], 
      size: "small",
    },
  ];

  const filteredIdeas = activeRoom === "All" ? ideas : ideas.filter(i => i.room === activeRoom);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* HERO - Image Background Style */}
      <section className="relative h-[550px] md:h-[700px] overflow-hidden flex items-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600"
        alt="Room Ideas"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Gradient Overlay (Text readability ke liye, left side se dark) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      {/* Bottom shadow for depth */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        
        {/* Glassmorphism Content Box */}
        <div className="max-w-2xl bg-black/30 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl animate-fade-in-up">
          
          {/* Top Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-10 bg-amber-400"></div>
            <span className="text-amber-400 text-xs tracking-[0.4em] font-bold uppercase drop-shadow-md">
              Interior Inspiration
            </span>
          </div>

          {/* Main Heading (Elegant Arrangement) */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-wide mb-6 drop-shadow-lg">
            Beautiful Rooms <br />
            <span className="text-amber-400 italic">Start Here.</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8 max-w-lg drop-shadow-md font-light">
            Curated room designs, color palettes, and layout ideas to inspire your next project.
          </p>

          {/* Optional CTA Button (Agar aap chahein toh add kar sakte hain) */}
          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-black px-7 py-3.5 rounded-full font-bold tracking-wider text-xs md:text-sm uppercase transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgba(245,158,11,0.3)] w-fit"
          >
            Explore Ideas
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>
      </div>
    </section>
      {/* ROOM FILTER (Icon-based) */}
      <section className="sticky top-20 z-30 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-amber-400/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            {rooms.map((r) => (
              <button
                key={r.name} onClick={() => setActiveRoom(r.name)}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  activeRoom === r.name 
                    ? "bg-amber-400 text-black shadow-lg scale-105" 
                    : "bg-white text-gray-600 border border-gray-200 hover:border-amber-400 hover:text-amber-500"
                }`}
              >
                <span className={activeRoom === r.name ? "text-black" : "text-amber-500"}>{r.icon}</span>
                {r.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {filteredIdeas.map((idea) => (
            <div
              key={idea.id}
              className={`group relative bg-white rounded-3xl overflow-hidden border border-amber-400/20 hover:border-amber-400 shadow-sm hover:shadow-2xl transition-all duration-500 ${
                idea.size === "large" ? "md:col-span-2 h-[400px]" : "h-[400px]"
              }`}
            >
              {/* Image */}
              <img
                src={idea.image} alt={idea.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-[10px] bg-amber-400 text-black font-bold px-3 py-1 rounded-full tracking-wider uppercase w-fit mb-3">
                  {idea.room}
                </span>
                
                <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight mb-2">
                  {idea.title}
                </h3>
                
                <p className="text-sm text-gray-300 leading-relaxed mb-5 line-clamp-2">
                  {idea.desc}
                </p>

                {/* Palette */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 font-bold">Color Palette</p>
                    <div className="flex gap-1.5">
                      {idea.palette.map((color, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-white/30 shadow-sm"
                          style={{ backgroundColor: color }}
                          title={color}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
          <section className="relative bg-[#111] py-20 md:py-28 overflow-hidden mb-12 md:mb-20 shadow-2xl border-t border-b border-amber-400/10">
      
      {/* ===== PREMIUM BACKGROUND EFFECTS ===== */}
      
      {/* Center Golden Glow (Sona sa chamakta hua effect) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Subtle Grid Pattern (Taaki flat na lage) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center z-10">
        
        {/* Small Tag */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-[1px] w-10 bg-amber-400/50"></div>
          <span className="text-amber-400 text-xs tracking-[0.3em] font-bold uppercase">
            Ready to Transform?
          </span>
          <div className="h-[1px] w-10 bg-amber-400/50"></div>
        </div>

        {/* Heading (White + Gold) */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
          Found Your <span className="text-amber-400 italic">Dream Room?</span>
        </h2>
        
        {/* Subheading */}
        <p className="text-gray-400 text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed">
          Shop our curated collection to recreate these looks in your own home. Premium quality, timeless design.
        </p>
        
        {/* CTA Button (Solid Gold) */}
        <Link
          to="/shop"
          className="group inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-black px-9 py-4 rounded-full font-bold tracking-wider text-sm uppercase transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_40px_rgba(245,158,11,0.3)] hover:shadow-[0_10px_50px_rgba(245,158,11,0.5)]"
        >
          Shop Furniture 
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        
      </div>
    </section>
    </div>
  );
};

export default BlogIdeas;
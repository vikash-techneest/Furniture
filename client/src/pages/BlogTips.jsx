import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLightbulb, FaLeaf, FaPaintBrush, FaTools, FaWater, FaSun,
  FaClock, FaArrowRight, FaCheckCircle, FaSearch,
} from "react-icons/fa";

const BlogTips = () => {
  const [search, setSearch] = useState("");

  const tips = [
    {
      id: 1, icon: <FaWater />, category: "Wood Care",
      title: "Protect Wood From Moisture",
      desc: "Wipe spills immediately. Use coasters. Place silica packets in drawers during monsoon.",
      difficulty: "Easy", time: "2 min", color: "from-blue-500 to-blue-600",
    },
    {
      id: 2, icon: <FaSun />, category: "Sun Damage",
      title: "Keep Away From Direct Sunlight",
      desc: "UV rays fade fabric and dry out wood. Use curtains or UV-blocking film on windows.",
      difficulty: "Easy", time: "1 min", color: "from-amber-400 to-amber-500",
    },
    {
      id: 3, icon: <FaLeaf />, category: "Leather Care",
      title: "Condition Leather Every 6 Months",
      desc: "Use a leather conditioner to prevent cracking. Avoid harsh soaps and direct heat.",
      difficulty: "Medium", time: "15 min", color: "from-green-500 to-green-600",
    },
    {
      id: 4, icon: <FaPaintBrush />, category: "Fabric Care",
      title: "Vacuum Upholstery Weekly",
      desc: "Use a soft brush attachment. This removes dust before it settles deep into fabric fibers.",
      difficulty: "Easy", time: "5 min", color: "from-pink-500 to-pink-600",
    },
    {
      id: 5, icon: <FaTools />, category: "Hardware",
      title: "Tighten Screws Every 3 Months",
      desc: "Loose screws cause wobbling and can damage the joints. A quick tightening extends furniture life.",
      difficulty: "Easy", time: "10 min", color: "from-gray-600 to-gray-700",
    },
    {
      id: 6, icon: <FaLightbulb />, category: "Scratch Repair",
      title: "Walnut Trick for Wood Scratches",
      desc: "Rub a walnut meat over a minor scratch. The natural oils blend with the wood and hide the mark.",
      difficulty: "Easy", time: "2 min", color: "from-amber-600 to-amber-700",
    },
  ];

  const filteredTips = tips.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#FAF7F2] min-h-screen overflow-x-hidden">
      
      {/* ═══════════════════════════════════════ */}
      {/* HERO SECTION (Height Increased) */}
      {/* ═══════════════════════════════════════ */}
      {/* ✅ pt-[80px] (navbar ke liye) aur py-20 md:py-32 (height badhane ke liye) */}
    <section className="relative bg-[#FAF7F2] text-[#111] overflow-hidden pt-8 md:pt-12 border-b border-amber-400/20">
      
      {/* Background Glow (Warm Amber) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-400/15 rounded-full blur-[100px] md:blur-[120px]"></div>
      </div>

      {/* Inner container ka py bhi thoda kam kiya hai (py-10 md:py-16) */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-10 md:py-16 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Left Text Section */}
        <div className="text-center lg:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full shadow-sm">
            <FaLeaf className="text-amber-600 text-xs" />
            <span className="text-amber-700 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">Care & Maintenance</span>
          </div>
          
          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight tracking-wide text-[#111]">
            Furniture <br />
            <span className="text-amber-500 italic">Tips & Tricks</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-gray-600 mt-4 max-w-md mx-auto lg:mx-0 text-sm md:text-base leading-relaxed">
            Simple, actionable tips to make your furniture last longer and look better.
            From daily habits to deep-care rituals.
          </p>

          {/* Search Bar */}
          <div className="mt-6 md:mt-8 relative max-w-md mx-auto lg:mx-0 group">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-500 transition-colors duration-300" />
            <input
              type="text" 
              value={search} 
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tips (e.g. wood, leather)..." 
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-gray-200 text-[#111] placeholder-gray-400 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm transition-all duration-300 text-sm"
            />
          </div>
        </div>

        {/* Right Golden Rule Card */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Soft Amber Glow behind card */}
            <div className="absolute -inset-1 bg-gradient-to-br from-amber-400/30 to-transparent rounded-[2rem] blur-xl opacity-60"></div>
            
            {/* Card Body */}
            <div className="relative bg-white border border-gray-100 shadow-xl rounded-[2rem] p-8 text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-amber-500 rounded-2xl text-black shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaCheckCircle className="text-3xl" />
              </div>
              <h3 className="font-serif text-2xl text-[#111] mb-3">Golden Rule</h3>
              <div className="w-12 h-[2px] bg-amber-500/30 mx-auto mb-4"></div>
              <p className="text-sm text-gray-500 leading-relaxed italic font-medium">
                "Five minutes of care every week adds years to your furniture's life."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

      {/* ═══════════════════════════════════════ */}
      {/* TIPS GRID */}
      {/* ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-10 md:py-20">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 md:mb-8">
          <div>
            <span className="text-amber-500 text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold">Actionable</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#111] mt-1">
              {search ? `Search: "${search}"` : "Essential Tips"}
            </h2>
          </div>
          <p className="text-xs md:text-sm text-gray-500">
            <span className="font-bold text-[#111]">{filteredTips.length}</span> tips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {filteredTips.map((tip, index) => (
            <div
              key={tip.id}
              className="group relative bg-white p-5 md:p-8 rounded-2xl border border-amber-400/20 hover:border-amber-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-4 right-5 text-4xl md:text-6xl font-serif font-bold text-amber-400/10 group-hover:text-amber-400/20 transition-colors">
                0{index + 1}
              </span>

              <div className="relative">
                <div className={`w-12 h-12 md:w-14 md:h-14 mb-3 md:mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br ${tip.color} text-white text-lg md:text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {tip.icon}
                </div>

                <span className="text-[9px] md:text-[10px] tracking-[0.2em] text-amber-500 uppercase font-bold bg-amber-50 px-2 md:px-2.5 py-1 rounded-full">
                  {tip.category}
                </span>

                <h3 className="font-serif text-lg md:text-2xl text-[#111] font-semibold mt-2 md:mt-3 mb-1.5 md:mb-2 pr-8">
                  {tip.title}
                </h3>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3 md:mb-5">
                  {tip.desc}
                </p>

                <div className="flex items-center gap-2 md:gap-3 pt-3 md:pt-4 border-t border-gray-100 text-[10px] md:text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaCheckCircle className="text-green-500" /> {tip.difficulty}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-amber-500" /> {tip.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* CTA SECTION */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative bg-[#FAF7F2] overflow-hidden py-16 md:py-24 mb-12 md:mb-20">
      
      {/* Halka sa amber glow background me */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 md:px-12 text-center">
        
        {/* Heading (Dark text for light bg) */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#111] mb-3">
          Want More <span className="text-amber-500 italic">In-Depth Guides?</span>
        </h2>
        
        {/* Subheading */}
        <p className="text-gray-600 text-xs md:text-sm mb-8 max-w-xl mx-auto">
          Read our detailed articles on furniture care, buying guides, and interior inspiration.
        </p>
        
        {/* Button (Dark button for contrast) */}
        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 bg-[#111] hover:bg-black text-white px-7 md:px-8 py-3.5 rounded-full font-bold tracking-wider text-xs md:text-sm uppercase transition-all duration-300 hover:-translate-y-1 shadow-lg"
        >
          Read All Articles 
          <FaArrowRight className="text-xs text-amber-400 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        
      </div>
    </section>
    </div>
  );
};

export default BlogTips;
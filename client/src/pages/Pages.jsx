import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInfoCircle,
  FaPhoneAlt,
  FaShoppingCart,
  FaCreditCard,
  FaUser,
  FaUserPlus,
  FaBookOpen,
  FaArrowRight,
  FaHome,
  FaTruck, // Order track icon ke liye
  FaSearch,
} from "react-icons/fa";

const Pages = () => {
  // Track Order ke liye state
  const [orderId, setOrderId] = useState("");

  const pageGroups = [
    {
      title: "Company",
      subtitle: "Get to know us",
      links: [
        { name: "About Us", desc: "Our story, values & team", icon: <FaInfoCircle />, link: "/about" },
        { name: "Contact Us", desc: "Reach out for queries", icon: <FaPhoneAlt />, link: "/contact" },
      ],
    },
    {
      title: "Shopping",
      subtitle: "Manage your orders",
      links: [
        { name: "My Cart", desc: "View items you've added", icon: <FaShoppingCart />, link: "/cart" },
        { name: "Checkout", desc: "Complete your purchase", icon: <FaCreditCard />, link: "/checkout" },
        { name: "Track Order", desc: "Check your delivery status", icon: <FaTruck />, link: "/track-order" }, // Naya Link
      ],
    },
    {
      title: "Account",
      subtitle: "Login or create account",
      links: [
        { name: "Login", desc: "Access your profile", icon: <FaUser />, link: "/login" },
        { name: "Sign Up", desc: "Create a new account", icon: <FaUserPlus />, link: "/signup" },
      ],
    },
    {
      title: "Explore",
      subtitle: "Read our journal",
      links: [
        { name: "Blog & Articles", desc: "Tips, trends & inspiration", icon: <FaBookOpen />, link: "/blog" },
        { name: "Shop Collection", desc: "Browse all furniture", icon: <FaShoppingCart />, link: "/shop" },
      ],
    },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-20">
      
      {/* ═══════════════════════════════════════ */}
      {/* HERO BANNER (Light Theme) */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative bg-[#FAF7F2] text-[#111] overflow-hidden border-b border-amber-400/20 pt-12 md:pt-16 pb-12 md:pb-16">
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-400/15 rounded-full blur-[120px]"></div>
        </div>

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-amber-500"></div>
            <span className="text-amber-600 text-xs tracking-[0.4em] font-bold uppercase">
              Navigation Hub
            </span>
            <div className="h-[2px] w-10 bg-amber-500"></div>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight tracking-wide text-[#111]">
            All <span className="text-amber-500 italic">Pages</span>
          </h1>
          
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Explore everything Sharma & Sons has to offer. Quick access to your account, orders, and company information.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* PAGE DIRECTORY GRID */}
      {/* ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {pageGroups.map((group, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.1)] hover:border-amber-400/30 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute -top-4 -right-2 text-8xl font-serif font-bold text-amber-400/5 group-hover:text-amber-400/10 transition-colors pointer-events-none">
                0{index + 1}
              </span>

              <div className="relative">
                <h2 className="font-serif text-2xl text-[#111] font-bold mb-1">
                  {group.title}
                </h2>
                <p className="text-xs text-amber-600/70 font-semibold tracking-wider uppercase mb-6">
                  {group.subtitle}
                </p>

                <div className="space-y-3">
                  {group.links.map((link, i) => (
                    <Link
                      key={i}
                      to={link.link}
                      className="flex items-center gap-4 p-3 -mx-3 rounded-2xl hover:bg-[#FAF7F2] transition-colors group/link"
                    >
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center text-lg group-hover/link:bg-amber-500 group-hover/link:text-black transition-colors duration-300">
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-[#111] group-hover/link:text-amber-600 transition-colors">
                          {link.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate mt-0.5">
                          {link.desc}
                        </p>
                      </div>
                      <FaArrowRight className="text-gray-300 group-hover/link:text-amber-500 group-hover/link:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* QUICK TRACK ORDER WIDGET (Naya Section) */}
      {/* ═══════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 pb-16">
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.03)] text-center relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="w-16 h-16 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
            <FaTruck className="text-2xl" />
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl text-[#111] mb-3">
            Track Your Order
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-8 max-w-md mx-auto">
            Enter your order ID below to check the real-time status of your furniture delivery.
          </p>

          <form 
            onSubmit={(e) => { e.preventDefault(); alert("Tracking Order: " + orderId); }} 
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <div className="relative flex-1">
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Enter Order ID (e.g. #ORD-12345)"
                required
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full bg-gray-50 border border-gray-200 text-[#111] placeholder-gray-400 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
              />
            </div>
            <button 
              type="submit"
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-full tracking-wider text-sm uppercase transition-all duration-300 shadow-[0_8px_20px_rgba(245,158,11,0.3)] whitespace-nowrap"
            >
              Track Now
            </button>
          </form>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* CTA BACK TO HOME */}
      {/* ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 text-center pb-10">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 bg-[#111] hover:bg-black text-white px-8 py-3.5 rounded-full font-bold tracking-wider text-sm uppercase transition-all duration-300 hover:-translate-y-1 shadow-lg"
        >
          <FaHome className="group-hover:text-amber-400 transition-colors" /> Back to Home
        </Link>
      </section>

    </div>
  );
};

export default Pages;
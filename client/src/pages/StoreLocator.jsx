import React, { useState } from "react";
import { FaMapMarkerAlt, FaSearch, FaPhoneAlt, FaClock, FaDirections, FaStore } from "react-icons/fa";

const StoreLocator = () => {
  const [search, setSearch] = useState("");

  const stores = [
    {
      id: 1,
      name: "Sharma & Sons - Flagship Store",
      city: "Mumbai",
      address: "123, Linking Road, Bandra West, Mumbai, Maharashtra 400050",
      phone: "+91 98765 43210",
      timing: "10:00 AM - 8:00 PM (Mon-Sun)",
    },
    {
      id: 2,
      name: "Sharma & Sons - Studio",
      city: "Delhi",
      address: "45, Haus Khas Village, New Delhi, Delhi 110016",
      phone: "+91 98765 43211",
      timing: "11:00 AM - 9:00 PM (Mon-Sun)",
    },
    {
      id: 3,
      name: "Sharma & Sons - Experience Center",
      city: "Bangalore",
      address: "78, Indiranagar 100ft Road, Bangalore, Karnataka 560038",
      phone: "+91 98765 43212",
      timing: "10:30 AM - 8:30 PM (Mon-Sun)",
    },
    {
      id: 4,
      name: "Sharma & Sons - Craft Hub",
      city: "Jodhpur",
      address: "12, Industrial Area, Jodhpur, Rajasthan 342005",
      phone: "+91 98765 43213",
      timing: "9:00 AM - 6:00 PM (Mon-Sat)",
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-20">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-[#FAF7F2] text-[#111] overflow-hidden border-b border-amber-400/20 pt-16 md:pt-24 pb-12">
        
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-400/15 rounded-full blur-[120px]"></div>
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center z-10">
          <div className="inline-flex items-center gap-2 mb-6 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
            <FaStore className="text-amber-600 text-sm" />
            <span className="text-amber-700 text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase">
              Find Us Near You
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight tracking-wide text-[#111] mb-6">
            Our <span className="text-amber-500 italic">Stores</span>
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-8">
            Visit our showrooms to experience the craftsmanship up close. Our design experts are ready to help you.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative group">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-500 transition-colors duration-300" />
            <input
              type="text"
              placeholder="Search by city, area, or pincode..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white border border-gray-200 text-[#111] placeholder-gray-400 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm transition-all duration-300 text-sm"
            />
          </div>
        </div>
      </section>

      {/* ===== STORES GRID ===== */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {stores.map((store) => (
            <div 
              key={store.id}
              className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.1)] hover:border-amber-400/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#111] group-hover:text-amber-600 transition-colors">
                    {store.name}
                  </h3>
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mt-1">
                    {store.city}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                  <FaMapMarkerAlt />
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <p className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-gray-400 mt-1 shrink-0" />
                  {store.address}
                </p>
                <p className="flex items-center gap-3">
                  <FaClock className="text-gray-400 shrink-0" />
                  {store.timing}
                </p>
                <p className="flex items-center gap-3">
                  <FaPhoneAlt className="text-gray-400 shrink-0" />
                  {store.phone}
                </p>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#111] hover:bg-amber-400 hover:text-black text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300">
                  <FaDirections /> Get Directions
                </button>
                <a 
                  href={`tel:${store.phone.replace(/\s/g, '')}`}
                  className="w-12 h-12 flex items-center justify-center border border-gray-200 hover:border-amber-400 text-gray-500 hover:text-amber-500 rounded-xl transition-all duration-300"
                >
                  <FaPhoneAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default StoreLocator;